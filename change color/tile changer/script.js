const colorBtn = document.querySelector('.changeColor')

colorBtn.addEventListener('click', change);

// changes the colors of the flex box tiles
function change(){
    for(let x = 1; x < 28; x++){
        let randomColor = [];
        for(let i = 0; i < 3; i++){
            let randomNum = Math.floor(Math.random() * 255);
            randomColor.push(randomNum);
            var colorStr = randomColor.join(',');
        }
        
        let boxNum = document.getElementById('box' + x);
        boxNum.style.background = 'rgb(' + colorStr + ')';
        console.log(colorStr);

    }

}