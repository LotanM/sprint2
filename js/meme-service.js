'use strict'
var gId = 1;
var gImgs;

var gKeywords = {
    'happy': 0,
    'funny': 1,
    'animal': 1,
    'men': 1
}

var gImgs = [{
    id: 1,
    url: `img/meme-imgs-square/1.jpg`,
    keywords: ['men', 'funny']
}, {
    id: 2,
    url: `img/meme-imgs-square/2.jpg`,
    keywords: ['animal']
}, {
    id: 3,
    url: `img/meme-imgs-square/3.jpg`,
    keywords: ['animal', 'funny']
}]


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I never eat Falafel',
            size: 40,
            align: 'left',
            color: 'black',
            font: 'Impact'
        }
    ]
}



function _createImg() {
    return {
        id: gId++,
        url: getImgUrl(),
        keywords: ['animal', 'funny']
    }
}

function _createImgs() {
    var imgs = []
    for (let i = 0; i < 18; i++) {
        imgs.push(_createImg())
    }
    gImgs = imgs;
}

function getImgUrl() {
    return `<img src="./img/meme-imgs-square/${gId}.jpg">`
}

// function makeId() {
//     var txt = '';
//     txt = gId++;
//     return gId
// }