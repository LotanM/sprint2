'use strict'

var gId = 1;
var gImgs;
var gMemes;
const KEY = 'memes';

var gKeywords = {
    'happy': 0,
    'funny': 1,
    'animal': 1,
    'men': 1,
    'cute': 1
}

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 50,
            align: 'center',
            color: 'black',
            font: 'Impact',
            stroke: 'white',
            pos: { x: 220, y: 100 }
        },
        {
            txt: '',
            size: 50,
            align: 'center',
            color: 'black',
            font: 'Impact',
            stroke: 'white',
            pos: { x: 220, y: 150 }
        }
    ]
}

var gImgs = [{
    id: 1,
    url: `img/meme-imgs-square/1.jpg`,
    keywords: ['men', 'funny']
}, {
    id: 2,
    url: `img/meme-imgs-square/2.jpg`,
    keywords: ['animal', 'cute']
}, {
    id: 3,
    url: `img/meme-imgs-square/3.jpg`,
    keywords: ['animal', 'cute']
}, {
    id: 4,
    url: `img/meme-imgs-square/4.jpg`,
    keywords: ['animal', 'cute', 'happy']
}, {
    id: 5,
    url: `img/meme-imgs-square/5.jpg`,
    keywords: ['funny', 'men', 'cute']
}, {
    id: 6,
    url: `img/meme-imgs-square/6.jpg`,
    keywords: ['men', 'funny']
}, {
    id: 7,
    url: `img/meme-imgs-square/7.jpg`,
    keywords: ['funny', 'cute']
}, {
    id: 8,
    url: `img/meme-imgs-square/8.jpg`,
    keywords: ['funny', 'men']
}, {
    id: 9,
    url: `img/meme-imgs-square/9.jpg`,
    keywords: ['cute', 'funny', 'happy']
}, {
    id: 10,
    url: `img/meme-imgs-square/10.jpg`,
    keywords: ['men', 'funny']
}, {
    id: 11,
    url: `img/meme-imgs-square/11.jpg`,
    keywords: ['men', 'funny']
}, {
    id: 12,
    url: `img/meme-imgs-square/12.jpg`,
    keywords: ['men', 'funny']
}, {
    id: 13,
    url: `img/meme-imgs-square/13.jpg`,
    keywords: ['men', 'funny']
}, {
    id: 14,
    url: `img/meme-imgs-square/14.jpg`,
    keywords: ['men']
}, {
    id: 15,
    url: `img/meme-imgs-square/15.jpg`,
    keywords: ['men']
}, {
    id: 16,
    url: `img/meme-imgs-square/16.jpg`,
    keywords: ['men', 'funny']
}, {
    id: 17,
    url: `img/meme-imgs-square/17.jpg`,
    keywords: ['men']
}, {
    id: 18,
    url: `img/meme-imgs-square/18.jpg`,
    keywords: ['funny']
}]


function createNewLine() {
    var y = gMeme.lines[gMeme.lines.length - 1].pos.y + 50
    gMeme.lines.push(
        {
            txt: '',
            size: 50,
            align: 'center',
            color: 'black',
            font: 'Impact',
            stroke: 'white',
            pos: { x: 220, y: y }
        }
    )
}

function deleteSelectedLine() {
    var lineIdx = gMeme.selectedLineIdx
    gMeme.lines.splice(lineIdx, 1);
}


function cleanTxts() {
    gMeme.lines.forEach(line => line.txt = '')
}

function _saveMemesToStorage() {
    saveToStorage(KEY, gMemes)
}