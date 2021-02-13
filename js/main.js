'use strict'

var gElCanvas;
var gCurrLineIdx = 0;

function init() {
    renderGallery()
    gElCanvas = document.getElementById('my-canvas');
    gCtx = gElCanvas.getContext('2d');
}

function toggleMenu() {
    var mainMenu = document.querySelector('.main-menu-wrapper');
    mainMenu.classList.toggle('open');
}

function renderGallery() {
    var gallery = gImgs
    var strHtmls = gallery.map(function (img) {
        return `<div class="gallery-item">
        <img src=${img.url} onclick="renderMemeEditor('${img.url}', ${img.id})" alt=""></div>`
    })
    document.querySelector('.grid-container').innerHTML = strHtmls.join('');
}


function renderModals(el) {
    document.querySelector('.meme-editor-container').style.display = 'none'
    document.querySelector('.search-container').style.display = 'flex'
    if (el.className === 'gallery') {
        document.querySelector('.image-gallery-container').style.display = 'block'
        document.querySelector('.about-container').style.display = 'none'
        document.querySelector('.my-memes-container').style.display = 'none'
    }
    else if (el.className === 'my-memes') {
        document.querySelector('.my-memes-container').style.display = 'block'
        document.querySelector('.image-gallery-container').style.display = 'none'
        document.querySelector('.about-container').style.display = 'none'
    }
    else if (el.className === 'about') {
        document.querySelector('.about-container').style.display = 'block'
        document.querySelector('.my-memes-container').style.display = 'none'
        document.querySelector('.image-gallery-container').style.display = 'none'
    }
    toggleMenu()
    clearCanvas()
}