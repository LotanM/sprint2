'use strict'

var gElCanvas;

function init() {
    renderGallery()
    gElCanvas = document.getElementById('my-canvas');
    gCtx = gElCanvas.getContext('2d');
    renderSavedMemes()
}

function toggleMenu() {
    var mainMenu = document.querySelector('.main-menu-wrapper');
    mainMenu.classList.toggle('open');
}

function renderGallery() {
    var gallery = gImgs
    var strHtmls = gallery.map(function (img) {
        return `<div class="grid-item">
        <img src=${img.url} onclick="renderMemeEditor('${img.url}', ${img.id})" alt=""></div>`
    })
    document.querySelector('.grid-container').innerHTML = strHtmls.join('');
}

function openEditorModal() {
    document.querySelector('.image-gallery-container').style.display = 'none'
    document.querySelector('.meme-editor-container').style.display = 'flex'
    document.querySelector('.my-memes-container').style.display = 'none'
}

function renderSavedMemes() {
    var memes = loadFromStorage(KEY)
    if (!memes || !memes.length) return
    var strHtmls = memes.map(imgUrl => {
        var img = `<img src="${imgUrl}"/>`
          return `<div class="grid-item">${img}</div>`
        })
        document.getElementById('my-memes').innerHTML = strHtmls.join('')
}



function renderModals(el) {
    document.querySelector('.meme-editor-container').style.display = 'none'
    if (el.className === 'gallery') {
        document.querySelector('.image-gallery-container').style.display = 'block'
        document.querySelector('.my-memes-container').style.display = 'none'
    }
    else if (el.className === 'my-memes') {
        document.querySelector('.my-memes-container').style.display = 'block'
        document.querySelector('.image-gallery-container').style.display = 'none'
    }
    document.querySelector('.save-btn').innerText = 'Save'
    cleanInputs()
    cleanTxts()
    toggleMenu()
    clearCanvas()
}

function cleanInputs() {
    var elInputs = document.querySelectorAll('.text-input');
    elInputs.forEach(input => input.value = '')
}