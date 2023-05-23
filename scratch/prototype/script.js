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

function copyVisibleText() {
  var visibleText = document.querySelectorAll('.visible');
  var textToCopy = "";
  
  visibleText.forEach(function(textElement) {
    textToCopy += textElement.textContent + "\n";
  });
  
  if (textToCopy.length > 0) {
    navigator.clipboard.writeText(textToCopy).then(function() {
      showCopyFeedback();
      console.log('Visible text copied to clipboard.');
    }).catch(function(error) {
      console.error('Unable to copy visible text: ', error);
    });
  }
}

function showCopyFeedback() {
  // var copyFeedback = document.getElementById('copyFeedback');
  var copyFeedbacks = document.querySelector('.copy-feedback');
  copyFeedbacks.forEach(function(copyFeedback) {
    copyFeedback.classList.add('show');
    setTimeout(function() {
      copyFeedback.classList.remove('show');
    }, 2000);
  });
}
