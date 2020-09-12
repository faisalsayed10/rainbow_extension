replaceText(document.body);
alert("Hello and Welcome! btw Hack Club is Kool! ")

function replaceText(element) {


  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/Hack Club/gi)) {
      const newElem = document.createElement("span");
      newElem.innerHTML = element.textContent.replace(
        /(Hack Club)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElem);
    }
  }
}
