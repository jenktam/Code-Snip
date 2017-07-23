let codeArea = document.querySelectorAll('pre'); //.lang-py.prettyprint.prettyprinted

for (let i = 0; i < codeArea.length; i++) {
  let copyButton = document.createElement('button');
  let buttonText = document.createTextNode('Copy');
  copyButton.className = 'copyButton';
  copyButton.appendChild(buttonText);
  codeArea[i].appendChild(copyButton);
  let codeBlock = codeArea[i].children[0];
  copyButton.addEventListener('click', copyTextFunc(codeBlock, copyButton, codeArea[i]));

}

//functions
function copyTextFunc(elementToCopy, buttonToUpdate, areaToHighlight){
  return function copyText() {

    //temporarily highlight copied text for user clarity
    areaToHighlight.className = 'areaToHighlight';
    areaToHighlight.style.backgroundColor = 'pink';
    elementToCopy.style.backgroundColor = 'transparent';

    setTimeout( () => {
      areaToHighlight.className = 'areaToUnHighlight';
    }, 400);

    window.copyToClipboard(elementToCopy.innerText);
    buttonToUpdate.innerText = 'Copied';
  }
}

