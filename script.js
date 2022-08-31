const mainDiv = document.querySelector('.main-div')
let click = false

//creating the tiles
for(let i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.classList.add('grid-tile');
    mainDiv.appendChild(div);
}



function startColor(){
    if(click === true){
         this.style.backgroundColor = color.value;
    }
    
}

const divTiles = document.querySelectorAll('.grid-tile')
console.log(divTiles)

//event to color the tiles
divTiles.forEach((div) =>{
    div.addEventListener('mouseover', startColor);
})

//click event to toggle click var to true and false
mainDiv.addEventListener('click', ()=>{
    click = !click;
    console.log(color.value)
})

//accessing color picker
const color = document.querySelector('#colorpicker')






