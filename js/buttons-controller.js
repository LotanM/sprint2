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
    gMeme.lines[gMeme.selectedLineIdx].pos.y -= 10
    updateTxtLine()
}

function moveTxtDown() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y += 10
    updateTxtLine()
}

function alignTxt(el) {
    console.log(el.className);
    if (el.className === 'btn aleft') gMeme.lines[gMeme.selectedLineIdx].pos.x -= 30
    else if (el.className === 'btn acenter') gMeme.lines[gMeme.selectedLineIdx].pos.x = 220
    else if (el.className === 'btn aright') gMeme.lines[gMeme.selectedLineIdx].pos.x += 30
    updateTxtLine()
}


function toggleStroke(elBtn) {
    elBtn.classList.toggle('selected')
    if (gMeme.lines[gCurrLineIdx].stroke === 'white') gMeme.lines[gMeme.selectedLineIdx].stroke = 'transparent'
    else gMeme.lines[gCurrLineIdx].stroke = 'white'
    updateTxtLine()
}


function shareMeme() {

}

function downloadMeme(elLink) {
    var imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}
