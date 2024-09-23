let gameseq = [];
let userseq = [];

let started = false;
let level = 0;
let box = document.querySelector(".box");
let h3 = document.querySelector("h3");
let boxs = ["red", "green", "blue", "black"];

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is start");
        started = true;
        levelUp();
    }
});

function gameFlash(box) {
    box.classList.add("gameflash");
    setTimeout(function () {
        box.classList.remove("gameflash");
    }, 100);
}
function userFlash(box) {
    box.classList.add("userflash");
    setTimeout(function () {
        box.classList.remove("userflash");
    }, 100);
}

function levelUp() {
    userseq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = boxs[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    let gameColorID = randBtn.getAttribute("id");
    // console.log(`Try id ${colorID}`);
    gameseq.push(gameColorID);
    console.log(gameseq);
    gameFlash(randBtn);
}

function chackAns(idx) {
    // console.log(`level ${level}`);
    if (gameseq[idx] == userseq[idx]) {
        if (gameseq.length == userseq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerHTML = `Game over Your score was <b>${level}</b> <br>click any btn to start again`;
        reset();
    }
}

function btnpress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    let userColorID = this.getAttribute("id");
    userseq.push(userColorID);
    // console.log(userseq);

    chackAns(userseq.length - 1);

}

let allbtn = document.querySelectorAll(".box");
for (btn of allbtn) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started == false;
    gameseq = [];
    userseq = [];
    level = 0;
}