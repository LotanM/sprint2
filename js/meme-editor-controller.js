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

function openEditorModal() {
    document.querySelector('.search-container').style.display = 'none'
    document.querySelector('.image-gallery-container').style.display = 'none'
    document.querySelector('.meme-editor-container').style.display = 'flex'
}


function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    drawImg(gClickedImgUrl)
}




function updateTxtLine() {
    var elInputValue = document.querySelector('.text-input').value
    clearCanvas()
    drawTxt(elInputValue)
    gMeme.lines[gCurrLineIdx].txt = elInputValue
}


function drawTxt(text) {
    gCurrLineIdx = gMeme.selectedLineIdx
    var font = gMeme.lines[gCurrLineIdx].font
    var stroke = gMeme.lines[gCurrLineIdx].stroke
    var fontSize = gMeme.lines[gCurrLineIdx].size
    var align = gMeme.lines[gCurrLineIdx].align
    var color = gMeme.lines[gCurrLineIdx].color
    var x = gMeme.lines[gCurrLineIdx].pos.x
    var y = gMeme.lines[gCurrLineIdx].pos.y
    gCtx.lineWidth = 1
    gCtx.strokeStyle = stroke
    gCtx.fillStyle = color
    gCtx.font = fontSize + 'px ' + font
    gCtx.textAlign = align
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}
