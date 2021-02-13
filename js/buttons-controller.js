'use strict'

function increaseFontSize() {
    console.log();
    gMeme.lines[gMeme.selectedLineIdx].size++
    drawTxts()
}

function decreaseFontSize() {
    gMeme.lines[gMeme.selectedLineIdx].size--
    drawTxts()
}

function moveTxtUp() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y -= 10
    drawTxts()
}

function moveTxtDown() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y += 10
    drawTxts()
}

function alignTxt(el) {
    if (el.className === 'btn aleft') gMeme.lines[gMeme.selectedLineIdx].pos.x -= 30
    else if (el.className === 'btn acenter') gMeme.lines[gMeme.selectedLineIdx].pos.x = 220
    else if (el.className === 'btn aright') gMeme.lines[gMeme.selectedLineIdx].pos.x += 30
    drawTxts()
}

function addNewLine() {
    createNewLine()
    renderInputs()
    drawTxts()
}

function deleteLine() {
    deleteSelectedLine()
    renderInputs()
    drawTxts()
}

function renderInputs() {
    var strHtml = ''
    gMeme.lines.forEach((input, idx) => {
        strHtml += `<input class="text-input" type="text"
        oninput="updateTxtLine(this.value)" value="${input.txt}" onfocus="setCurrInput(${idx})">`
    })
    document.querySelector('.txt-inputs-container').innerHTML = strHtml
}

function toggleStroke(elBtn) {
    elBtn.classList.toggle('stroke')
    if (gMeme.lines[gMeme.selectedLineIdx].stroke === 'white') gMeme.lines[gMeme.selectedLineIdx].stroke = 'transparent'
    else gMeme.lines[gMeme.selectedLineIdx].stroke = 'white'
    drawTxts()
}

function updateTxtLine(value) {
    gMeme.lines[gMeme.selectedLineIdx].txt = value
    drawTxts()
}


function setCurrInput(currIdx) {
    gMeme.selectedLineIdx = currIdx
}


function downloadMeme(elLink) {
    var imgContent = gElCanvas.toDataURL()
    elLink.href = imgContent
    console.log(elLink)
    elLink.download = 'myMeme'
}
