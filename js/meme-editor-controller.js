'use strict'
var gCtx, gClickedImgUrl;

function drawImg(gClickedImgUrl) {
    const img = new Image()
    img.src = gClickedImgUrl
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function renderMemeEditor(imgUrl, imgId) {
    gMeme.selectedImgId = imgId
    gClickedImgUrl = imgUrl
    openEditorModal()
    drawImg(gClickedImgUrl)
}



function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    drawImg(gClickedImgUrl)
}

function drawTxts() {
    clearCanvas()
    gMeme.lines.forEach((line) => {
        drawTxt(line)
    })
}


function drawTxt(line) {
    var font = line.font
    var stroke = line.stroke
    var fontSize = line.size
    var align = line.align
    var color = line.color
    var x = line.pos.x
    var y = line.pos.y
    gCtx.lineWidth = 1
    gCtx.strokeStyle = stroke
    gCtx.fillStyle = color
    gCtx.font = fontSize + 'px ' + font
    gCtx.textAlign = align
    gCtx.fillText(line.txt, x, y)
    gCtx.strokeText(line.txt, x, y)
}
