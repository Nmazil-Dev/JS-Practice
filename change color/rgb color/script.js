// Select the colorbtn class
const colorBtn = document.querySelector('.colorBtn');
// Select the tagname
const bodyBcg = document.querySelector('body');
const colorSet = document.querySelector('.colorNameSet');
const colorMess = document.getElementById('colorName');

colorBtn.addEventListener('click', changeColor);

//Color Changing Function
function changeColor (){
    //Picks random rgb values 0-255
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    bodyBcg.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.getElementById('colorName').innerHTML = 'The rgb of this color is: ' + red + ',' + green + ',' + blue;
    colorSet.style.backgroundColor = 'rgba(0,0,0,0.6)';
}