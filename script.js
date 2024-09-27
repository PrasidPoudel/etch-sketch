/* 1.Create a grid inside a box
2. (optional) create a button for grid and reset 
3. Set up a hover effect to change the color of one grid when mouse hover
4. (Optional) Set up a RGB effect
*/
const main=document.querySelector('.container-1');
const size=document.querySelector('.size');
const dark=document.querySelector('.darkening');
const eraser=document.querySelector('.eraser');
const reset=document.querySelector('.reset');
reset.addEventListener('click',function () {//This function change background color of every div to white by iterating every one of them
    const divs=document.querySelectorAll('div');
    divs.forEach(div => {
        div.style.backgroundColor='white';
    }
    )
});
size.addEventListener('click',setgrid);
function creatediv(pixelsize) {//This function create the divs both horizontally and vertically by doing nested loop
    for(let i=0;i<pixelsize;i++) {
        for(let j=0;j<pixelsize;j++) {
           let boxes=document.createElement('div');
            boxes.classList.add("prasid");
            boxes.style.height=650/pixelsize+'px';
            boxes.style.width=800/pixelsize+'px'
                    boxes.addEventListener('mouseenter',()=> {
                    boxes.style.backgroundColor=`rgb(${0},${0},${0})`;
                    boxesstyle.opacity=0.1;
                    })
            main.appendChild(boxes);
        }
    }
}
function setgrid() {//This function resize the grid if clicked on setup size
    let etch;
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    do {
       etch= Number(prompt('no of grid'));
    }while(etch>=100);
    creatediv(etch);
}
creatediv(16);//Initial Condidtion
eraser.addEventListener('click',()=>{//This erase the color on a hovering div by setting their color to white
    const bins=document.querySelectorAll('.prasid');
    bins.forEach(bin=> {
        bin.addEventListener('mouseenter',()=>{
        bin.style.backgroundColor='white';
        });
    })
    })
    dark.addEventListener('click',()=> {//Name is dark but it randomize the colors of div(Sorry for the name there was a bit of complication while working)
        const trashs=document.querySelectorAll('.prasid');
        trashs.forEach(trash=> {
            trash.addEventListener('mouseenter',()=> {
                let Color1 = Math.floor(Math.random() * 256);
                let Color2 = Math.floor(Math.random() * 256);
                let Color3 = Math.floor(Math.random() * 256);
                trash.style.backgroundColor = `rgb(${Color1}, ${Color2}, ${Color3})`;
            })
        })
    })