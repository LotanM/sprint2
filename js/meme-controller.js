'use strict'
let gElCanvas, gCtx, gClickedImgUrl;
let gCurrLineIdx = 0;

function init() {
    renderGallery()
    gElCanvas = document.getElementById('my-canvas');
    gCtx = gElCanvas.getContext('2d');
}


function renderGallery() {
    var gallery = gImgs
    var strHtmls = gallery.map(function (img) {
        return `<div class="gallery-item">
        <img src=${img.url} onclick="renderMemeEditor('${img.url}', ${img.id})" alt=""></div>`
    })
    document.querySelector('.grid-container').innerHTML = strHtmls.join('');
}



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

function closeEditorModal() {
    document.querySelector('.search-container').style.display = 'flex'
    document.querySelector('.image-gallery-container').style.display = 'block'
    clearCanvas()
    document.querySelector('.meme-editor-container').style.display = 'none'
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    drawImg(gClickedImgUrl)
}


function txtChangeListener(elInput) {
    console.log('txtChangeListener:')
    console.log('elInput.id:', elInput.id)
    var text = elInput.value;
    if (elInput.id === '0') {
        console.log('this is first input');
    }
    clearCanvas()
    drawTxt(text)
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
    var fontSize = gMeme.lines[gCurrLineIdx].size
    var align = gMeme.lines[gCurrLineIdx].align
    var color = gMeme.lines[gCurrLineIdx].color
    var x = gMeme.lines[gCurrLineIdx].pos.x
    var y = gMeme.lines[gCurrLineIdx].pos.y
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'white'
    gCtx.fillStyle = color
    gCtx.font = fontSize + 'px ' + font
    gCtx.textAlign = align
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}
