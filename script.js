const mainDiv = document.querySelector('.main-div')

for(let i = 0; i < 256; i++){
    const div = document.createElement('div')
    div.classList.add('grid-tile')
    mainDiv.appendChild(div)
}