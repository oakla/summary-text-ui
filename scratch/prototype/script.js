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

function grammaraticalList(array) {
  var listString = "";

  for (var i = 0; i < array.length; i++) {
    listString += array[i];
    if (i < array.length - 2) {
      listString += ", ";
    } else if (i === array.length - 2) {
      listString += ", and ";
    }
  }

  return listString;
}

function buildTriggeringActivity() {
  var triggerText = document.getElementById("triggerText");
  var selectedElements = getSelectedElements();

  if (selectedElements.length === 0) {
    triggerText.innerHTML = "No triggering activity selected.";
  }
  else {
    var elementString = "Triggering activity: ";
    elementString += grammaraticalList(selectedElements);
    triggerText.innerHTML = elementString;
  }
}

function toggleButton(button) {
  if (button.classList.contains("selected")) {
    button.classList.remove("selected");
  } else {
    button.classList.add("selected");
  }
    buildTriggeringActivity();
}

