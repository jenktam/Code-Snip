// create copy button
let pre = document.querySelectorAll('pre');
let codeArea = document.querySelectorAll('pre'); //.lang-py.prettyprint.prettyprinted

for (let i = 0; i < codeArea.length; i++) {
  let copyButton = document.createElement('button');
  let buttonText = document.createTextNode('Copy');
  copyButton.className = 'copyButton';
  copyButton.appendChild(buttonText);
  //change color of code text on button click
  copyButton.addEventListener('click', copyText);
  codeArea[i].appendChild(copyButton);

  }

//functions
function copyText(){
  let code = document.querySelectorAll('pre > code');
  for (let i = 0; i < code.length; i++) {
    code[i].style.backgroundColor = 'pink';
  }
}

