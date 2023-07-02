var hour = "";
var hourElement = null;
var minute = "";
var minuteElement = null;
var actualMeeting = {};
var actualMeetingIndex = 0;
var meetings = [];
var group = {};

function init() {
  group = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");
  meetings = group.reunioes;
  if (meetings === undefined || meetings.length === 0) {
    window.location.replace("/add-group/days");
  }
  
  fillLists();
  setMeeting(meetings[actualMeetingIndex]);
}

function setMeeting(meeting) {
  actualMeeting = meeting;
  document.getElementById("subtitle").innerHTML = meeting.dia;

  if (!!meeting?.horario?.horas || meeting?.horario?.horas === 0) {
    let _hour = document.querySelector(`#hour-list li[value='${meeting?.horario?.horas}']`);
    if (_hour && _hour !== hourElement) checkMarker('hour', _hour);
    _hour && _hour.scrollIntoView({
      behavior: 'auto',
      block: 'center',  
      inline: 'center'
    });
  } else if (hourElement) {
    checkMarker('hour', hourElement);
  }

  if (!!meeting?.horario?.minutos || meeting?.horario?.minutos === 0) {
    let _minute = document.querySelector(`#minute-list li[value='${meeting?.horario?.minutos}']`);
    if (_minute && _minute !== minuteElement) checkMarker('minute', _minute);
    _minute && _minute.scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center'
    });
  } else if (minuteElement) {
    checkMarker('minute', minuteElement);
  }

}

function previousMeeting() {
  if (actualMeetingIndex === 0) {
    window.location.replace("/add-group/days");
  } else {
    actualMeetingIndex--;
    setMeeting(meetings[actualMeetingIndex]);
  }
}

function nextMeeting() {
  if (actualMeetingIndex === (meetings.length - 1)) {

    var missingHours = hasMissingHours();
    if (!group.reunioes || group.reunioes.length === 0) {
      showToast("Selecione os dias em que o grupo irá se reunir!");
    } else if (missingHours) {
      showToast(`Existem dias com horários a serem preenchidos! ${missingHours?.dia ? "(" +  missingHours.dia + ")" : ''}`)
    }else {
      window.location.replace("/add-group/name-group");
    }

  } else {
    actualMeetingIndex++;
    setMeeting(meetings[actualMeetingIndex]);
  }
}

function checkMarker(type, element) {
  if (type == "hour") {
    if (element.childNodes[0] != hour) {
      hour = element.childNodes[0];
      element.childNodes[1].setAttribute("marked", "true");

      if (hourElement && hourElement != element) {
        hourElement.childNodes[1].removeAttribute("marked");
      }

      hourElement = element;
      setHours(hour.textContent);
    } else {
      hour = "";
      element.childNodes[1].removeAttribute("marked");
      setHours(undefined);
    }
  } else if (type == "minute") {
    if (element.childNodes[0] != minute) {
      minute = element.childNodes[0];
      element.childNodes[1].setAttribute("marked", "true");

      if (minuteElement && minuteElement !== element) {
        minuteElement.childNodes[1].removeAttribute("marked");
      }

      minuteElement = element;
      setMinutes(minute.textContent);
    } else {
      minute = "";
      element.childNodes[1].removeAttribute("marked");
      setMinutes(undefined);
    }
  }

  element.scrollIntoView({
    behavior: 'auto',
    block: 'center',  
    inline: 'center'
  });
}

function setHours(value) {
  let v = parseInt(value);
  (actualMeeting.horario ??= {}).horas = !isNaN(v) ? v : undefined;
  localStorage.setItem("adicionar_grupo", JSON.stringify(group));
}

function setMinutes(value) {
  let v = parseInt(value);
  (actualMeeting.horario ??= {}).minutos =  !isNaN(v) ? v : undefined;
  localStorage.setItem("adicionar_grupo", JSON.stringify(group));

}

function fillLists () {
  const hourList = document.getElementById("hour-list");
  const minuteList = document.getElementById("minute-list");
  
  for (const hora of Array(24).keys()) {
    const li = document.createElement("li");
    li.value = hora;
    li.innerHTML = `${String(hora).padStart(2, '0')} <i class="bi bi-check2-circle"></i>`;
    li.addEventListener("click", () => {
      checkMarker('hour', li);
    }); 
    hourList.appendChild(li);
  }

  for (const minuto of Array(60).keys()) {
    const li = document.createElement("li");
    li.value = minuto;
    li.innerHTML = `${String(minuto).padStart(2, '0')} <i class="bi bi-check2-circle"></i>`;
    li.addEventListener("click", () => {
      checkMarker('minute', li);
    }); 
    minuteList.appendChild(li);
  }
}

function hasMissingHours () {
  try {
    return group.reunioes.find(item => 
      !item?.horario || 
      (!item?.horario?.horas && item?.horario?.horas !== 0) || 
      (!item?.horario?.minutos && item?.horario?.minutos !== 0));
  } catch (e) {
    console.error(e);
    return true;
  }
} 

function showToast(message) {
  let toast = document.getElementById("toast");
  toast.innerHTML = message;
  toast.classList.add('show-toast');

  setTimeout(() => {
    toast.classList.remove('show-toast');
  }, 3000);
}