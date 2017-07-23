// create copy button
// import copy from 'copy-to-clipboard';
let codeArea = document.querySelectorAll('pre'); //.lang-py.prettyprint.prettyprinted

for (let i = 0; i < codeArea.length; i++) {
  let copyButton = document.createElement('button');
  let buttonText = document.createTextNode('Copy');
  copyButton.className = 'copyButton';
  copyButton.appendChild(buttonText);
  //change color of code text on button click
  codeArea[i].appendChild(copyButton);
  let codeBlock = codeArea[i].children[0]
  copyButton.addEventListener('click', copyTextFunc(codeBlock));

}

//functions
function copyTextFunc(elementToCopy){
  //currently copying all text but we want this to only copy a specific section
  // let code = document.querySelectorAll('pre > code');

  return function copyText() {
    elementToCopy.style.backgroundColor = 'pink';
    console.log("elementToCopy.innerText:", elementToCopy.innerText);
    window.copyToClipboard(elementToCopy.innerText);
  }
}

