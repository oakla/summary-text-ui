var selectedElements = [];

function toggleButton(buttonNumber) {
  var button = document.getElementById("button" + buttonNumber);
  var elementText = document.getElementById("elementText");

  if (button.classList.contains("selected")) {
    button.classList.remove("selected");
    selectedElements.splice(selectedElements.indexOf(buttonNumber), 1);
  } else {
    button.classList.add("selected");
    selectedElements.push(buttonNumber);
  }

  if (selectedElements.length === 0) {
    elementText.innerHTML = "No selection";
  } else {
    var elementString = "Element ";

    for (var i = 0; i < selectedElements.length; i++) {
      elementString += selectedElements[i];
      if (i < selectedElements.length - 2) {
        elementString += ", ";
      } else if (i === selectedElements.length - 2) {
        elementString += " and ";
      }
    }

    elementText.innerHTML = elementString;
  }
}
