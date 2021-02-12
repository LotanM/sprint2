'use strict'

function renderMyMemesGallery() {
    var gallery = gImgs
    var strHtmls = gallery.map(function (img) {
        return `<div class="gallery-item">
        <img src=${img.url} onclick="renderMemeEditor('${img.url}', ${img.id})" alt=""></div>`
    })
    document.querySelector('.grid-container').innerHTML = strHtmls.join('');
}