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

function alignTxt(el) {
    console.log(el.className);
    if(el.className === 'btn aleft') gMeme.lines[gMeme.selectedLineIdx].pos.x -= 30
    else if(el.className === 'btn acenter') gMeme.lines[gMeme.selectedLineIdx].pos.x = 220
    else if(el.className === 'btn aright') gMeme.lines[gMeme.selectedLineIdx].pos.x += 30
    updateTxtLine()
}


function shareMeme() {
    
}

function downloadMeme() {
    gMemes
    _saveMemesToStorage()
}