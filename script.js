const mainDiv = document.querySelector('.main-div')

for(let i = 0; i < 256; i++){
    const div = document.createElement('div')
    div.classList.add('grid-tile')
    mainDiv.appendChild(div)
}

function changeColor(e){
    console.log(e)
    e.target.style.backgroundColor = 'red'
}

const divTiles = document.querySelectorAll('.grid-tile')
console.log(divTiles)

divTiles.forEach((div) => {
    div.addEventListener('mouseover', changeColor)
});






