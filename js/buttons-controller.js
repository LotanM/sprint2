'use strict'

function increaseFontSize() {
    gMeme.lines[gMeme.selectedLineIdx].size++
    updateTxtLine()
}


function decreaseFontSize() {
    gMeme.lines[gMeme.selectedLineIdx].size--
    updateTxtLine()
}

function moveTxtUp() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y--
    updateTxtLine()
}

function moveTxtDown() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y++
    updateTxtLine()
}

function addLineInput() {
    // var baseElement = document.querySelector('.control-box');
    var strHtml = '<input class="control-box-input" id="text-input" type="text" value="Put your text here">'
    document.querySelector('.control-box .txt-inputs-container').innerHTML += strHtml;
}