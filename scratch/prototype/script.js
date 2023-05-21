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

  // elementText.innerHTML = grammaraticalList(selectedElements);

  if (selectedElements.length === 0) {
    elementText.innerHTML = "No selection";
  } else {
    var elementString = "Element ";

    for (var i = 0; i < selectedElements.length; i++) {
      elementString += selectedElements[i];
      if (i < selectedElements.length - 2) {
        elementString += ", ";
      } else if (i === selectedElements.length - 2) {
        elementString += ", and ";
      }
    }

    elementText.innerHTML = elementString;
  }
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

