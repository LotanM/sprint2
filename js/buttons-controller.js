'use strict'
var gMemes;
const KEY = 'memes';


function increaseFontSize() {
    gMeme.lines[gMeme.selectedLineIdx].size += 15
    drawTxts()
}

function decreaseFontSize() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 15
    drawTxts()
}

function moveTxtUp() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y -= 15
    drawTxts()
}

function moveTxtDown() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y += 15
    drawTxts()
}

function alignTxt(el) {
    if (el.className === 'btn aleft') gMeme.lines[gMeme.selectedLineIdx].pos.x = 0
    else if (el.className === 'btn acenter') gMeme.lines[gMeme.selectedLineIdx].pos.x = gElCanvas.width / 2
    else if (el.className === 'btn aright') gMeme.lines[gMeme.selectedLineIdx].pos.x = gElCanvas.width
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
    elBtn.classList.toggle('dark-outline')
    if (gMeme.lines[gMeme.selectedLineIdx].stroke === 'white') gMeme.lines[gMeme.selectedLineIdx].stroke = 'transparent'
    else gMeme.lines[gMeme.selectedLineIdx].stroke = 'white'
    drawTxts()
}

function updateTxtLine(value) {
    gMeme.lines[gMeme.selectedLineIdx].txt = value
    drawTxts()
}


function fontChange(value) {
    document.querySelector('select').style.fontFamily = value
    gMeme.lines[gMeme.selectedLineIdx].font = value
    drawTxts()
}


function setCurrInput(currIdx) {
    gMeme.selectedLineIdx = currIdx
}

function changetxtColor(elColorInput) {
    elColorInput.addEventListener("input", function () {
        gMeme.lines[gMeme.selectedLineIdx].color = elColorInput.value
        drawTxts()
    }, false);
}


function downloadMeme(elLink) {
    var imgContent = gElCanvas.toDataURL()
    elLink.href = imgContent
    elLink.download = 'myMeme'
}

function saveMeme() {
    var img = new Image()
    img.src = gElCanvas.toDataURL()
    _saveMemesToStorage(img.src)
    renderSavedMemes()
}

function _saveMemesToStorage(imgSrc) {
    document.querySelector('.save-btn').innerText = 'Saved!'
    var memes = loadFromStorage(KEY)
    if (!memes || !memes.length) memes = []
    gMemes = memes
    // gMemes = (!memes || !memes.length ? [] : memes)
    gMemes.push(imgSrc)
    saveToStorage(KEY, gMemes)
}