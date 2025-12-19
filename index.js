// function playSound(event){
//     const audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);
//     const key = document.querySelector(`div[data-key = "${event.keyCode}"]`);
//     // const pause = document.querySelector(`audio[data-key = "${event.keyCode}"]`);

//         key.classList.add("playing");
//         audio.crruentTime = 0;
//         audio.play();
//         // audio.pause();
// }


// const keys = Array.from(document.querySelectorAll('.key'));
// window.addEventListener('keydown', playSound);


var audio = document.getElementById('eagle');
window.addEventListener("keydown", e =>{
    var x = e.keyCode;
    if (x == 65){
        audio.play();
    }else if(x === 74){
        audio.pause();
    }
});

var offense = document.getElementById('offense');
window.addEventListener("keydown", e =>{
    // console.log(e);
    var x = e.keyCode;
    if (x == 83){
        offense.play();
    }else if(x === 75){
        offense.pause();
    }
});

var time_out = document.getElementById('time-out');
window.addEventListener("keydown", e =>{
    // console.log(e);
    var x = e.keyCode;
    if (x == 68){
        time_out.play();
    }else if(x === 76){
        time_out.pause();
    }
});

var quarter_end = document.getElementById('quarter-end');
window.addEventListener("keydown", e =>{
    // console.log(e);
    var x = e.keyCode;
    if (x == 70){
        quarter_end.play();
    }else if(x === 186){
        quarter_end.pause();
    }
});

var ball_in = document.getElementById('ball-in');
window.addEventListener("keydown", e =>{
    // console.log(e);
    var x = e.keyCode;
    if (x == 81){
        ball_in.play();
    }else if(x === 219){
        ball_in.pause();
    }
});

var ball_in_one = document.getElementById('ball-in-I');
window.addEventListener("keydown", e =>{
    // console.log(e);
    var x = e.keyCode;
    if (x == 87){
        ball_in_one.play();
    }else if(x === 80){
        ball_in_one.pause();
    }
});

var gagal_masuk = document.getElementById('not-in');
window.addEventListener("keydown", e =>{
    // console.log(e);
    var x = e.keyCode;
    if (x == 69){
        gagal_masuk.play();
    }else if(x === 79){
        gagal_masuk.pause();
    }
});

var coin_mario = document.getElementById('mario-coin');
window.addEventListener("keydown", e =>{
    // console.log(e);
    var x = e.keyCode;
    if (x == 82){
        coin_mario.play();
    }else if(x === 73){
        coin_mario.pause();
    }
});

var half_time = document.getElementById('half-time');
window.addEventListener("keydown", e =>{
    // console.log(e);
    var x = e.keyCode;
    if (x == 84){
        half_time.play();
    }else if(x === 85){
        half_time.pause();
    }
});

var pertandingan1 = document.getElementById('pertandingan-ny1');
window.addEventListener("keydown", e =>{
    // console.log(e);
    var x = e.keyCode;
    if (x == 90){
        pertandingan1.play();
    }else if(x === 191){
        pertandingan1.pause();
    }
});

var pertandingan2 = document.getElementById('pertandingan-ny2');
window.addEventListener("keydown", e =>{
    // console.log(e);
    var x = e.keyCode;
    if (x == 88){
        pertandingan2.play();
    }else if(x === 190){
        pertandingan2.pause();
    }
});

var wings = document.getElementById('wings');
window.addEventListener("keydown", e =>{
    // console.log(e);
    var x = e.keyCode;
    if (x == 67){
        wings.play();
    }else if(x === 188){
        wings.pause();
    }
});

var tip_off = document.getElementById('tipoff');
window.addEventListener("keydown", e =>{
    // console.log(e);
    var x = e.keyCode;
    if (x == 86){
        tip_off.play();
    }else if(x === 66){
        tip_off.pause();
    }
});

var slam_dunk = document.getElementById('slam-dunk');
window.addEventListener("keydown", e =>{
    // console.log(e);
    var x = e.keyCode;
    if (x == 71){
        slam_dunk.play();
    }else if(x === 72){
        slam_dunk.pause();
    }
});

var queen = document.getElementById('queen-1');
window.addEventListener("keydown", e =>{
    // console.log(e);
    var x = e.keyCode;
    if (x == 49){
        queen.play();
    }else if(x === 50){
        queen.pause();
    }
});

var gameplay_2 = document.getElementById('game-5');
window.addEventListener("keydown", e =>{
    // console.log(e);
    var x = e.keyCode;
    if (x == 192){
        gameplay_2.play();
    }else if(x === 221){
        gameplay_2.pause();
    }
});

var gameplay_3 = document.getElementById('game-3');
window.addEventListener("keydown", e =>{
    // console.log(e);
    var x = e.keyCode;
    if (x == 37){
        gameplay_3.play();
    }else if(x === 39){
        gameplay_3.pause();
    }
});

var gameplay_4 = document.getElementById('game-4');
window.addEventListener("keydown", e =>{
    console.log(e);
    var x = e.keyCode;
    if (x == 220){
        gameplay_4.play();
    }else if(x === 16){
        gameplay_4.pause();
    }
});