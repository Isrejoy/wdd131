
// function playc3() {
//     let audio = document.querySelector('#c3file');
//     audio.play();
// }
// function playcd3() {
//     let audio = document.querySelector('#cd3file');
//     audio.play();
// }
// function playd3() {
//     let audio = document.querySelector('#d3file');
//     audio.play();
// }
// function playde3() {
//     let audio = document.querySelector('#de3file');
//     audio.play();
// }
// function playe3() {
//     let audio = document.querySelector('#e3file');
//     audio.play();
// }
// function playf3() {
//     let audio = document.querySelector('#f3file');
//     audio.play();
// }
// function playfg3() {
//     let audio = document.querySelector('#fg3file');
//     audio.play();
// }
// function playg3() {
//     let audio = document.querySelector('#g3file');
//     audio.play();
// }
// function playga3() {
//     let audio = document.querySelector('#ga3file');
//     audio.play();
// }
// function playa3() {
//     let audio = document.querySelector('#a3file');
//     audio.play();
// }
// function playab3() {
//     let audio = document.querySelector('#ab3file');
//     audio.play();
// }
// function playb3() {
//     let audio = document.querySelector('#b3file');
//     audio.play();
// }

// function playc4() {
//     let audio = document.querySelector('#c4file');
//     audio.play();
// }
// function playcd4() {
//     let audio = document.querySelector('#cd4file');
//     audio.play();
// }
// function playd4() {
//     let audio = document.querySelector('#d4file');
//     audio.play();
// }
// function playde4() {
//     let audio = document.querySelector('#de4file');
//     audio.play();
// }
// function playe4() {
//     let audio = document.querySelector('#e4file');
//     audio.play();
// }
// function playf4() {
//     let audio = document.querySelector('#f4file');
//     audio.play();
// }
// function playfg4() {
//     let audio = document.querySelector('#fg4file');
//     audio.play();
// }
// function playg4() {
//     let audio = document.querySelector('#g4file');
//     audio.play();
// }
// function playga4() {
//     let audio = document.querySelector('#ga4file');
//     audio.play();
// }
// function playa4() {
//     let audio = document.querySelector('#a4file');
//     audio.play();
// }
// function playab4() {
//     let audio = document.querySelector('#ab4file');
//     audio.play();
// }
// function playb4() {
//     let audio = document.querySelector('#b4file');
//     audio.play();
// }

// function playc5() {
//     let audio = document.querySelector('#c5file');
//     audio.play();
// }
// function playcd5() {
//     let audio = document.querySelector('#cd5file');
//     audio.play();
// }
// function playd5() {
//     let audio = document.querySelector('#d5file');
//     audio.play();
// }
// function playde5() {
//     let audio = document.querySelector('#de5file');
//     audio.play();
// }
// function playe5() {
//     let audio = document.querySelector('#e5file');
//     audio.play();
// }
// function playf5() {
//     let audio = document.querySelector('#f5file');
//     audio.play();
// }
// function playfg5() {
//     let audio = document.querySelector('#fg5file');
//     audio.play();
// }
// function playg5() {
//     let audio = document.querySelector('#g5file');
//     audio.play();
// }
// function playga5() {
//     let audio = document.querySelector('#ga5file');
//     audio.play();
// }
// function playa5() {
//     let audio = document.querySelector('#a5file');
//     audio.play();
// }
// function playab5() {
//     let audio = document.querySelector('#ab5file');
//     audio.play();
// }
// function playb5() {
//     let audio = document.querySelector('#b5file');
//     audio.play();
// }

// document.querySelector('#c3').addEventListener('click', playc3);
// document.querySelector('#cd3').addEventListener('click', playcd3);
// document.querySelector('#d3').addEventListener('click', playd3);
// document.querySelector('#de3').addEventListener('click', playde3);
// document.querySelector('#e3').addEventListener('click', playe3);
// document.querySelector('#f3').addEventListener('click', playf3);
// document.querySelector('#fg3').addEventListener('click', playfg3);
// document.querySelector('#g3').addEventListener('click', playg3);
// document.querySelector('#ga3').addEventListener('click', playga3);
// document.querySelector('#a3').addEventListener('click', playa3);
// document.querySelector('#ab3').addEventListener('click', playab3);
// document.querySelector('#b3').addEventListener('click', playb3);

// document.querySelector('#c4').addEventListener('click', playc4);
// document.querySelector('#cd4').addEventListener('click', playcd4);
// document.querySelector('#d4').addEventListener('click', playd4);
// document.querySelector('#de4').addEventListener('click', playde4);
// document.querySelector('#e4').addEventListener('click', playe4);
// document.querySelector('#f4').addEventListener('click', playf4);
// document.querySelector('#fg4').addEventListener('click', playfg4);
// document.querySelector('#g4').addEventListener('click', playg4);
// document.querySelector('#ga4').addEventListener('click', playga4);
// document.querySelector('#a4').addEventListener('click', playa4);
// document.querySelector('#ab4').addEventListener('click', playab4);
// document.querySelector('#b4').addEventListener('click', playb4);

// document.querySelector('#c5').addEventListener('click', playc5);
// document.querySelector('#cd5').addEventListener('click', playcd5);
// document.querySelector('#d5').addEventListener('click', playd5);
// document.querySelector('#de5').addEventListener('click', playde5);
// document.querySelector('#e5').addEventListener('click', playe5);
// document.querySelector('#f5').addEventListener('click', playf5);
// document.querySelector('#fg5').addEventListener('click', playfg5);
// document.querySelector('#g5').addEventListener('click', playg5);
// document.querySelector('#ga5').addEventListener('click', playga5);
// document.querySelector('#a5').addEventListener('click', playa5);
// document.querySelector('#ab5').addEventListener('click', playab5);
// document.querySelector('#b5').addEventListener('click', playb5);


const keys = [
  "c3","cd3","d3","de3","e3","f3","fg3","g3","ga3","a3","ab3","b3",
  "c4","cd4","d4","de4","e4","f4","fg4","g4","ga4","a4","ab4","b4",
  "c5","cd5","d5","de5","e5","f5","fg5","g5","ga5","a5","ab5","b5"
];

function playSound(key) {
  const audio = document.querySelector(`#${key}file`);
  if(audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

keys.forEach(key => {
  const area = document.querySelector(`#${key}`);
  if(area) {
    area.addEventListener("click", () => playSound(key));
  }
});