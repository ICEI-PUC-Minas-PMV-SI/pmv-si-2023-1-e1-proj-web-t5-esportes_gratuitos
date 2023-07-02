var hour = "";
var hourElement = null;
var minute = "";
var minuteElement = null;
var actualMeeting = {};
var actualMeetingIndex = 0;
var meetings = [];
var group = {};

function init() {
  fillLists();

  group = JSON.parse(localStorage.getItem("adicionar_grupo") || "{}");
  meetings = group.reunioes;
  if (meetings === undefined || meetings.length === 0) {
    window.location.replace("/add-group/days");
  }

  setMeeting(meetings[actualMeetingIndex]);
}

function setMeeting(meeting) {
  actualMeeting = meeting;
  document.getElementById("subtitle").innerHTML = meeting.dia;

  if (meeting?.horario?.horas !== undefined && meeting?.horario?.minutos !== undefined) {
    let _hour = document.querySelector(`#hour-list li[value='${meeting?.horario?.horas}']`);
    let _minute = document.querySelector(`#minute-list li[value='${meeting?.horario?.minutos}']`);

    if (!_hour || !_minute) return;

    if (_hour !== hourElement) checkMarker('hour', _hour);
    if (_minute !== minuteElement) checkMarker('minute', _minute);

    _hour.scrollIntoView({
      behavior: 'auto',
      block: 'center',  
      inline: 'center'
    });
    _minute.scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center'
    });
  } else {
    hourElement && checkMarker('hour', hourElement);
    minuteElement && checkMarker('minute', minuteElement);
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
    window.location.replace("/add-group/name-group");
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
      (actualMeeting.horario ??= {}).horas = parseInt(hour.textContent);
      localStorage.setItem("adicionar_grupo", JSON.stringify(group));
    } else {
      hour = "";
      element.childNodes[1].removeAttribute("marked");
    }
  } else if (type == "minute") {
    if (element.childNodes[0] != minute) {
      minute = element.childNodes[0];
      element.childNodes[1].setAttribute("marked", "true");

      if (minuteElement && minuteElement !== element) {
        minuteElement.childNodes[1].removeAttribute("marked");
      }

      minuteElement = element;
      (actualMeeting.horario ??= {}).minutos = parseInt(minute.textContent);
      localStorage.setItem("adicionar_grupo", JSON.stringify(group));
    } else {
      minute = "";
      element.childNodes[1].removeAttribute("marked");
    }
  }

  element.scrollIntoView({
    behavior: 'auto',
    block: 'center',  
    inline: 'center'
  });
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
