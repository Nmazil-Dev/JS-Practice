// Select the colorbtn class
const colorBtn = document.querySelector('.colorBtn');
// Select the tagname
const bodyBcg = document.querySelector('body');
const colorSet = document.querySelector('.colorNameSet');
const colorMess = document.getElementById('colorName');

const hexSelect = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Add onclick event to change background color
colorBtn.addEventListener('click', changeColor);

//Color Changing Function
function changeColor (){
    let hexColor = [];
    //Chooses a random value from hexSelect and pushes to hexColor
    for (let i = 0; hexColor.length < 6; i++ ){
        let randomNum = Math.floor(Math.random() * (hexSelect.length));
        hexColor.push(hexSelect[randomNum]);
    }
    hexColorStr = hexColor.join('');
    bodyBcg.style.backgroundColor = hexColorStr;
    document.getElementById('colorName').innerHTML = 'The hex of this color is: #' + hexColorStr;
    colorSet.style.backgroundColor = 'rgba(0,0,0,0.6)';
}