//Key Variables 
let keyC = document.getElementById('keyC');
let keyD = document.getElementById('keyD');
let keyE = document.getElementById('keyE');
let keyF = document.getElementById('keyF');
let keyG = document.getElementById('keyG');
let keyA = document.getElementById('keyA');
let keyB = document.getElementById('keyB');
let keyCSharp = document.getElementById('cSharp');
let keyDSharp = document.getElementById('dSharp');
let keyESharp = document.getElementById('eSharp');
let keyFSharp = document.getElementById('fSharp');
let keyGSharp = document.getElementById('gSharp');
let keyASharp = document.getElementById('aSharp');

//Button Variables
let isRecording = false;
let recordButton = document.getElementById('button--record');
let playButton = document.getElementById('button--play');

//Audio Variables
var audioC  = new Audio();
var srcAudC  = document.createElement("source");
srcAudC.type = "audio/wav";
srcAudC.src  = "C.wav";
audioC.appendChild(srcAudC);

//let audioC = new Audio();
let audioD = new Audio();
let audioE = new Audio();
let audioF = new Audio();
let audioG = new Audio();
let audioA = new Audio();
let audioB = new Audio();
let audioCSharp = new Audio();
let audioDSharp = new Audio();
let audioFSharp = new Audio();
let audioGSharp = new Audio();
let audioASharp = new Audio();
audioC.src = 'C.wav';
audioD.src = 'D.wav';
audioE.src = 'E.wav';
audioF.src = 'F.wav';
audioG.src = 'G.wav';
audioA.src = 'A.wav';
audioB.src = 'B.wav';
audioCSharp.src = 'CSharp.wav';
audioDSharp.src = 'DSharp.wav';
audioFSharp.src = 'FSharp.wav';
audioGSharp.src = 'GSharp.wav';
audioASharp.src = 'ASharp.wav';

keyC.addEventListener('click', function(){
    recordKeyPress('c');
    var audioC_copy = audioC.cloneNode();
    audioC_copy.play();
})

keyD.addEventListener('click', function(){
    recordKeyPress('d');
    var audioD_copy = audioD.cloneNode();
    audioD_copy.play();
})
keyE.addEventListener('click', function(){
    recordKeyPress('e');
    var audioE_copy = audioE.cloneNode();
    audioE_copy.play();
})
keyF.addEventListener('click', function(){
    recordKeyPress('f');
    var audioF_copy = audioF.cloneNode();
    audioF_copy.play();
})
keyG.addEventListener('click', function(){
    recordKeyPress('g');
    var audioG_copy = audioG.cloneNode();
    audioG_copy.play();
})
keyA.addEventListener('click', function(){
    recordKeyPress('a');
    var audioA_copy = audioA.cloneNode();
    audioA_copy.play();
})
keyB.addEventListener('click', function(){
    recordKeyPress('b');
    var audioB_copy = audioB.cloneNode();
    audioB_copy.play();
})
keyCSharp.addEventListener('click', function(){
    recordKeyPress('cSharp');
    var audioCSharp_copy = audioCSharp.cloneNode();
    audioCSharp_copy.play();
})
keyDSharp.addEventListener('click', function(){
    recordKeyPress('dSharp');
    var audioDSharp_copy = audioDSharp.cloneNode();
    audioDSharp_copy.play();
})
keyFSharp.addEventListener('click', function(){
    recordKeyPress('fSharp');
    var audioFSharp_copy = audioFSharp.cloneNode();
    audioFSharp_copy.play();
})
keyGSharp.addEventListener('click', function(){
    recordKeyPress('gSharp');
    var audioGSharp_copy = audioGSharp.cloneNode();
    audioGSharp_copy.play();
})
keyASharp.addEventListener('click', function(){
    recordKeyPress('aSharp');
    var audioASharp_copy = audioASharp.cloneNode();
    audioASharp_copy.play();
})

class UnusKeyTime {
    constructor(pKeyName, pTimeDiff){
        this.keyName = pKeyName;
        this.timeDiff = pTimeDiff;
    }
}

let arrKeypresses=[];

function recordKeyPress(keyName){
    if(isRecording == true){
        let timeNow = new Date();
        let timeDiff = timeNow - startRecordingTime;
        let objUnusKeyTime = new UnusKeyTime(keyName, timeDiff);
        arrKeypresses.push(objUnusKeyTime);
       console.log(objUnusKeyTime.timeDiff + ', ' + objUnusKeyTime.keyName); 
       console.log(arrKeypresses.length);
    }
};

let startRecordingTime;

//Button Event Listeners
recordButton.addEventListener('click', function(){
    if(isRecording == false) {
        arrKeypresses = [];
        startRecordingTime = new Date();
        recordButton.innerText = 'Stop';
        isRecording = true;
    } else {
        recordButton.innerText = 'Record';
        isRecording = false;
    }  
});
    
playButton.addEventListener('click', function(){
    if(isRecording == true){
        recordButton.innerText = 'Record';
        isRecording = false;   
    }
    if(arrKeypresses.length > 0){
        playBackTime();
    }
});

var playbackItemNo = 0;

function playBackTime(){
    let objPlayKey = arrKeypresses[playbackItemNo];

    playKey(objPlayKey.keyName);
    if(arrKeypresses.length > playbackItemNo + 1) {
        console.log('next');
        let objPlayKeyNext = arrKeypresses[playbackItemNo + 1];
        let playNextKeyInMS = objPlayKeyNext.timeDiff - objPlayKey.timeDiff;
        console.log('next time: ' + playNextKeyInMS);
        playbackItemNo++;
        var nextKey = objPlayKeyNext.keyName;
        setTimeout(playBackTime,playNextKeyInMS);

    }

    console.log('Play ' + objPlayKey.timeDiff + ', ' + objPlayKey.keyName); 
    
    //if(playbackItemNo == arrKeypresses.length) playbackItemNo=0;
}

function playKey(pKeyName){
    switch(pKeyName){
        case 'a': audioA.play(); break;
        case 'b': audioB.play(); break;
        case 'c': audioC.play(); break;
        case 'd': console.log('d'); audioD.play(); break;
        case 'e': audioE.play(); break;
        case 'f': audioF.play(); break;
        case 'g': audioG.play(); break;
        case 'cSharp': audioCSharp.play(); break;
        case 'dSharp': audioDSharp.play(); break;
        case 'fSharp': audioFSharp.play(); break;
        case 'gSharp': audioGSharp.play(); break;
        case 'aSharp': audioASharp.play(); break;
    }
}
