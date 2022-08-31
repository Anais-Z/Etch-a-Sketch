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

//resets the grid into background color white
function resetGrid(){
    divTiles.forEach((div) =>{
        div.style.backgroundColor = 'white';
    })
    
}


//changes the value to what the slider points to
function changeGridValue(){
    gridValue = gridSlider.value
    gridVal.textContent = gridSlider.value
    console.log(gridValue)
    createTiles(gridValue)
}

//accessing color picker
const color = document.querySelector('#colorpicker')

//accessing reset button
const reset = document.querySelector('.reset-button')

reset.addEventListener('click', resetGrid)


//accessing grid slider and p element
const gridVal = document.querySelector('.grid-value')
const gridSlider = document.querySelector('#gridSlider')

gridVal.textContent = gridSlider.value
gridVal.style.color = 'black'

gridSlider.addEventListener('change', changeGridValue)

//create tiles
createTiles(16)