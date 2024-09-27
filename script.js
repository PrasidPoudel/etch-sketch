
const pen=document.querySelector('.pencil');
const main=document.querySelector('.container-1');
const size=document.querySelector('.size');
const dark=document.querySelector('.darkening');
const eraser=document.querySelector('.eraser');
const reset=document.querySelector('.reset');
reset.addEventListener('click',function () {//This function change background color of every div to white by iterating every one of them
    const divs=document.querySelectorAll('.prasid');
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
            boxes.style.height=`${500/pixelsize}px`;
            boxes.style.width=`${600/pixelsize}px`;
            boxes.style.flex=`0 1 auto`
                    boxes.addEventListener('mouseenter',()=> {
                    boxes.style.backgroundColor=`black`;
                    })
            main.appendChild(boxes);
            console.log(boxes)
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
    }while(etch>=100)
    creatediv(etch);
}
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
    pen.addEventListener('click',()=> {
        const props=document.querySelectorAll('.prasid');
        props.forEach(prop=> {
            prop.addEventListener('mouseenter',()=> {
                prop.style.backgroundColor='black';
            })
        })
    })
    creatediv(16);//Initial Condidtion
