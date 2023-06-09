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

function copyFreeText() {
  /* Get the text area */
  var textarea = document.getElementById("output-text");

  /* Select the text */
  textarea.select();
  textarea.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text to the clipboard */
  // document.execCommand("copy");
  navigator.clipboard.writeText(textarea.value).then(function() {
    showCopyFeedback();
  });
}

function showCopyFeedback() {
  // var copyFeedback = document.getElementById('copyFeedback');
  var copyFeedbackElements = document.querySelectorAll('.copy__confirmation-message');
  copyFeedbackElements.forEach(function(copyFeedback) {
    copyFeedback.classList.add('show');
    setTimeout(function() {
      copyFeedback.classList.remove('show');
    }, 2000);
  });
}


