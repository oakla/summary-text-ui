
function getSelectedElements() {
  var selectedElements = [];
  var buttons = document.getElementsByTagName("button");

  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].classList.contains("selected")) {
      selectedElements.push(buttons[i].innerHTML);
    }
  }

  return selectedElements;
}


function buildTriggeringActivity() {
  var triggerText = document.getElementById("triggerText");
  var selectedElements = getSelectedElements();

  if (selectedElements.length === 0) {
    triggerText.innerHTML = "No triggering activity selected.";
  }
  else {
    var elementString = "Triggering activity: ";

    for (var i = 0; i < selectedElements.length; i++) {
      elementString += selectedElements[i];
      if (i < selectedElements.length - 2) {
        elementString += ", ";
      } else if (i === selectedElements.length - 2) {
        elementString += " and ";
      }
    }

    triggerText.innerHTML = elementString;
  }
}

function toggleButton(button) {
  if (button.classList.contains("selected")) {
    button.classList.remove("selected");
    // selectedElements.splice(selectedElements.indexOf(buttonNumber), 1);
  } else {
    button.classList.add("selected");
    // selectedElements.push(buttonNumber);
  }
    buildTriggeringActivity();
}
