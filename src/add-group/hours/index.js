var hour = "";
var hourElement = null;
var minute = "";
var minuteElement = null;

function init() {}

function checkMarker(type, element) {
  if (type == "hour") {
    if (element.childNodes[0] != hour) {
      hour = element.childNodes[0];
      element.childNodes[1].setAttribute("marked", "true");

      if (null != hourElement) {
        hourElement.childNodes[1].removeAttribute("marked");
      }

      hourElement = element;
    } else {
      hour = "";
      element.childNodes[1].removeAttribute("marked");
    }
  } else if (type == "minute") {
    if (element.childNodes[0] != minute) {
      minute = element.childNodes[0];
      element.childNodes[1].setAttribute("marked", "true");

      if (null != minuteElement) {
        minuteElement.childNodes[1].removeAttribute("marked");
      }

      minuteElement = element;
    } else {
      minute = "";
      element.childNodes[1].removeAttribute("marked");
    }
  }
}
/////////////PEGAR O HORÁRIO SELECINADO///////////////////

document.addEventListener("DOMContentLoaded", function () {
  const liElements = document.querySelectorAll("#hour li");

  liElements.forEach((liElement) => {
    liElement.addEventListener("click", function () {
      const modalityName = this.textContent.trim().split(" ")[0];
      console.log(modalityName);
    });
  });
});
////////////////////////////////////////
