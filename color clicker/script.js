const button = document.getElementById('myButton');
const body = document.getElementById('bTag');
const para = document.getElementById('pTag');

document.getElementById('myText').value = `Click me!`;

let startSize = 10;
let heightStart = 2;
let buttonCount = 1;


let clickFunction = () =>{
    let randomColor = Math.floor(Math.random() * 255);
    let randomColor2 = Math.floor(Math.random() * 255);
    let randomColor3 = Math.floor(Math.random() * 255);

    if (buttonCount === 1){
        document.getElementById('myText').value = `You clicked ${buttonCount} time!`;
    } else {
        document.getElementById('myText').value = `You clicked ${buttonCount} times!`;
    }
    

    para.style.color = 'rgb(255,255,255)';
    if(startSize > 45){
        button.style.height = `${heightStart}px`;
    } else {
        button.style.width = `${startSize}rem`;
    }
    body.style.backgroundColor = `rgb(${randomColor}, ${randomColor2}, ${randomColor3})`;
    startSize += 5;
    heightStart += 10;
    buttonCount++;
}