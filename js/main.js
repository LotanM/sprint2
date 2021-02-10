'use strict'
var gElCanvas, gCtx;



function getCanvas() {
    gElCanvas = document.getElementById('my-canvas');
    gCtx = gElCanvas.getContext('2d');
    drawImg()
}

function drawImg() {
    const img = new Image()
    img.src = gImgs[2].url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}


function drawTxt() {
    var text = gMeme.lines[0].txt
    var font = gMeme.lines[0].font
    var fontSize = gMeme.lines[0].size
    var align = gMeme.lines[0].align
    var color = gMeme.lines[0].color
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'white'
    gCtx.fillStyle = color
    gCtx.font = fontSize + 'px ' + font
    gCtx.textAlign = align
    var x = 100
    var y = 100
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}