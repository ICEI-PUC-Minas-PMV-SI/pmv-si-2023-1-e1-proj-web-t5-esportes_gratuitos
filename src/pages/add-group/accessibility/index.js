var days = [];
var checkedElement = null;

function init() { }

function checkMarker(element) {
    let index = days.indexOf(element.childNodes[0]);

    if (index < 0) {
        days.push(element.childNodes[0]);
        element.childNodes[1].setAttribute("marked", "true");
    } else {
        days.splice(index, 1);
        element.childNodes[1].removeAttribute("marked");
    }

}