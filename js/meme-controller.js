'use strict'
var gElCanvas, gCtx;
var gClickedImgUrl;

function init() {
    renderGallery()
    gElCanvas = document.getElementById('my-canvas');
    gCtx = gElCanvas.getContext('2d');
    txtListener()
}


function renderGallery() {
    var gallery = gImgs
    var strHtmls = gallery.map(function (img) {
        return `<div class="gallery-item">
        <img src=${img.url} onclick="openMemeEditor('${img.url}')" alt="">
    </div>`
    })
    document.querySelector('.grid-container').innerHTML = strHtmls.join('');
}



function drawImg(imgUrl) {
    const img = new Image()
    img.src = imgUrl
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}


function txtListener() {
    var text = document.getElementById('text-input').value
    clearCanvas()
    drawTxt(text)
    window.addEventListener("keyup", txtListener, true);
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




function openMemeEditor(imgUrl) {
    gClickedImgUrl = imgUrl;
    drawImg(gClickedImgUrl);
    document.querySelector('.search-container').style.display = 'none'
    document.querySelector('.image-gallery-container').style.display = 'none'
    txtListener()
    document.querySelector('.meme-editor-container').style.display = 'flex'
}

function closeMemeEditor() {
    document.querySelector('.search-container').style.display = 'flex'
    document.querySelector('.image-gallery-container').style.display = 'block'
    clearCanvas()
    document.querySelector('.meme-editor-container').style.display = 'none'
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    drawImg(gClickedImgUrl)
}