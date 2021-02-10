'use strict'
var gElCanvas, gCtx;

function init() {
    gElCanvas = document.getElementById('my-canvas');
    gCtx = gElCanvas.getContext('2d');
    drawCanvas()
    drawImg()
}



function drawImg() {
    const img = new Image()
    img.src = gImgs[2].url;
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}


function drawCanvas() {
    var text = document.getElementById('text-input').value
    clearCanvas()
    drawTxt(text)
    window.addEventListener("keyup", drawCanvas, true);
}



function drawTxt(text) {
    gMeme.lines[0].txt = text
    var font = gMeme.lines[0].font
    var fontSize = gMeme.lines[0].size
    var align = gMeme.lines[0].align
    var color = gMeme.lines[0].color
    var x = 100
    var y = 100
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'white'
    gCtx.fillStyle = color
    gCtx.font = fontSize + 'px ' + font
    gCtx.textAlign = align
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}




function openMemeEditor() {
    var elSearchContainer = document.querySelector('.search-container');
    elSearchContainer.style.display = 'none'
    var elGallery = document.querySelector('.image-gallery-container');
    elGallery.style.display = 'none'
    drawCanvas()
    var elEditor = document.querySelector('.meme-editor-container')
    elEditor.style.display = 'block'
}

function closeMemeEditor() {
    var elSearchContainer = document.querySelector('.search-container');
    elSearchContainer.style.display = 'block'
    var elGallery = document.querySelector('.image-gallery-container');
    elGallery.style.display = 'block'
    clearCanvas()
    var elEditor = document.querySelector('.meme-editor-container')
    elEditor.style.display = 'none'
}



function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    drawImg()
}