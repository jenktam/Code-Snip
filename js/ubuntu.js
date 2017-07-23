let codeArea = document.querySelectorAll("pre");
console.log("codeArea", codeArea);

for (let i = 0; i < codeArea.length; i++) {
  let copyButton = document.createElement("button");
  let buttonText = document.createTextNode("Copy");
  copyButton.className = "copyButton";
  copyButton.appendChild(buttonText);
  codeArea[i].appendChild(copyButton);
  console.log("codeArea[i].children[0]", codeArea[i].children[0])


  // let codeBlock = codeArea[i].children[0];
  copyButton.addEventListener(
    "click",
    copyTextFunc(codeArea[i], copyButton, codeArea[i])
  );
}

//functions
function copyTextFunc(elementToCopy, buttonToUpdate, areaToHighlight) {
  return function copyText() {
    //temporarily highlight copied text for user clarity
    areaToHighlight.className = "areaToHighlight";
    let codeBlock = areaToHighlight.children[0];
    codeBlock.style.backgroundColor = "transparent";
    areaToHighlight.style.backgroundColor = "pink";
    // elementToCopy.style.backgroundColor = "transparent";

    setTimeout(() => {
      areaToHighlight.className = "areaToUnHighlight";
    }, 400);

    //copy code text
    window.copyToClipboard(elementToCopy.innerText.slice(0,-4));
    buttonToUpdate.innerText = "Copied";
  };
}
