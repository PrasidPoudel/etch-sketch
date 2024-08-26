/* 1.Create a grid inside a box
2. (optional) create a button for grid and reset 
3. Set up a hover effect to change the color of one grid when mouse hover
4. (Optional) Set up a RGB effect
*/
const main=document.querySelector('.container-1');
const size=document.querySelector('.size');
let pixelsize=10;
const reset=document.querySelector('.reset');
reset.addEventListener('click',function () {
    //window.location.reload();
    const divs=document.querySelectorAll('div');
    divs.forEach(div => {
        div.style.backgroundColor='white';
    }
    )
});
size.addEventListener('click',nigga);
function creatediv(pixelsize) {
    for(let i=0;i<pixelsize;i++) {
        for(let j=0;j<pixelsize;j++) {
           let boxes=document.createElement('div');
            boxes.style.height=500/pixelsize+'px';
            boxes.style.width=700/pixelsize+'px'

            boxes.addEventListener('mouseenter',changecolor);
            main.appendChild(boxes);
        }
    }
}

function changecolor(e) {
    const Color1 = Math.floor(Math.random() * 256);
    const Color2 = Math.floor(Math.random() * 256);
    const Color3 = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${Color1}, ${Color2}, ${Color3})`;
}
function nigga() {
    let etch;
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    do {
       etch= Number(prompt('no of grid'));
    }while(etch>100);
    creatediv(etch);
}
