var modality = "";
var checkedElement = null;

function init() { 
    const nextButton = document.getElementById("forward");
    
    console.log(location.href);
    if (location.href.split("#")[1] === 'suggestion') {
        nextButton.href = "/add-group/location";
    }

}

function checkMarker(element) {

    if (element.childNodes[0] != modality) {
        modality = element.childNodes[0];
        element.childNodes[1].setAttribute("marked", "true");

        if (null != checkedElement) {
            checkedElement.childNodes[1].removeAttribute("marked");
        }

        checkedElement = element;
    } else {
        modality = "";
        element.childNodes[1].removeAttribute("marked");
    }

}