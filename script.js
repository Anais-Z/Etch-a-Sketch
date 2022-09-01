
let click = false
//creating the tiles

function createGrid(gridValue){   
    let mainDiv = document.querySelector('.main-div')
    for(let i = 0; i < gridValue * gridValue; i++){
        const div = document.createElement('div');
        div.addEventListener('mouseover', startColor);
           div.classList.add('grid-tile');

           mainDiv.appendChild(div);
   }

    mainDiv.style.gridTemplateRows = `repeat(${gridValue}, 1fr)`;
    mainDiv.style.gridTemplateColumns = `repeat(${gridValue}, 1fr)`;
    mainDiv.style.height = '550px'
    mainDiv.style.width = '550px'
   gridValue = 0
}



function startColor(){
    if(click === true){
         this.style.backgroundColor = color.value;
    }
}


//click event to toggle click var to true and false
const body = document.body
body.addEventListener('click', ()=>{
    click = !click;
})
   


//resets the grid into background color white
function resetGrid(){
    let mainDiv = document.querySelector('.main-div')
    let gridTiles = mainDiv.querySelectorAll('.grid-tile')
    gridTiles.forEach(div => {
        div.style.backgroundColor = 'white'
    })
}



//changes the value to what the slider points to
function changeGridValue(){
    gridValue = gridSlider.value
    gridVal.textContent = gridSlider.value
    let mainDiv = document.querySelector('.main-div')
    while(mainDiv.firstChild){
        mainDiv.firstChild.remove()
    }

    createGrid(gridValue)
   
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
createGrid(16)

