const soundBtn = document.querySelector('.play-sound-btn');
let myAudio = document.querySelector('#audio');
soundBtn.addEventListener('click',()=>{
    myAudio.play();
});