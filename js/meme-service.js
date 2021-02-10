'use strict'


var gKeywords = {
    'happy': 0,
    'funny': 1,
    'animal': 1,
    'men': 1
}

var gImgs = [{
    id: 1,
    url: 'img/meme-imgs-square/1.jpg',
    keywords: ['men', 'funny']
}, {
    id: 2,
    url: 'img/meme-imgs-square/2.jpg',
    keywords: ['animal']
}, {
    id: 3,
    url: 'img/meme-imgs-square/3.jpg',
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



