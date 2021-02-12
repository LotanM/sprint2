'use strict'

var gId = 1;
var gImgs;

var gKeywords = {
    'happy': 0,
    'funny': 1,
    'animal': 1,
    'men': 1
}

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Put your text here',
            size: 50,
            align: 'center',
            color: 'black',
            font: 'Impact',
            pos: { x: 220, y: 100 }
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
    keywords: ['animal']
}, {
    id: 3,
    url: `img/meme-imgs-square/3.jpg`,
    keywords: ['animal', 'funny']
}, {
    id: 4,
    url: `img/meme-imgs-square/4.jpg`,
    keywords: ['animal', 'funny']
}, {
    id: 5,
    url: `img/meme-imgs-square/5.jpg`,
    keywords: ['animal', 'funny']
}, {
    id: 6,
    url: `img/meme-imgs-square/6.jpg`,
    keywords: ['animal', 'funny']
}, {
    id: 7,
    url: `img/meme-imgs-square/7.jpg`,
    keywords: ['animal', 'funny']
}, {
    id: 8,
    url: `img/meme-imgs-square/8.jpg`,
    keywords: ['animal', 'funny']
}, {
    id: 9,
    url: `img/meme-imgs-square/9.jpg`,
    keywords: ['animal', 'funny']
}, {
    id: 10,
    url: `img/meme-imgs-square/10.jpg`,
    keywords: ['animal', 'funny']
}, {
    id: 11,
    url: `img/meme-imgs-square/11.jpg`,
    keywords: ['animal', 'funny']
}, {
    id: 12,
    url: `img/meme-imgs-square/12.jpg`,
    keywords: ['animal', 'funny']
}, {
    id: 13,
    url: `img/meme-imgs-square/13.jpg`,
    keywords: ['animal', 'funny']
}, {
    id: 14,
    url: `img/meme-imgs-square/14.jpg`,
    keywords: ['animal', 'funny']
}, {
    id: 15,
    url: `img/meme-imgs-square/15.jpg`,
    keywords: ['animal', 'funny']
}, {
    id: 16,
    url: `img/meme-imgs-square/16.jpg`,
    keywords: ['animal', 'funny']
}, {
    id: 17,
    url: `img/meme-imgs-square/17.jpg`,
    keywords: ['animal', 'funny']
}, {
    id: 18,
    url: `img/meme-imgs-square/18.jpg`,
    keywords: ['animal', 'funny']
}]


function createNewLine() {
    let y = gMeme.lines[gMeme.selectedLineIdx].pos.y
    y += 100
    gCurrLineIdx++
    gMeme.lines.push(
        {
            txt: 'Put your text here',
            size: 50,
            align: 'center',
            color: 'black',
            font: 'Impact',
            pos: { x: 220, y: y }
        }
    )
}
