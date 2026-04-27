let round = 0;
const maxRounds = 3;
let score = 0;

const games = [
    {
        name: "Parasite",
        options: [
            { img: "parasite1.jpg", correct: true },
            { img: "spirited1.webp", correct: false },
            { img: "samurai.png", correct: false }
        ]
    },

    {
        name: "Spirited Away",
        options: [
            { img: "samurai1.jpg", correct: false },
            { img: "parasite2.jpg", correct: false },
          { img: "spirited11.jpg", correct: true }
        ]
    },

    {
        name: "Seven Samurai",
        options: [
            { img: "spirited12.webp", correct: false },
             { img: "samurai2.jpg", correct: true },
            { img: "parasite3.png", correct: false }
        ]
    }
];

window.onload = loadRound;

// ielādē raundu
function loadRound() {

    if (round >= maxRounds) {
        document.getElementById("result").innerText =
            `🏁 Beigas! Tu uzminēji ${score} no ${maxRounds}`;
        return;
    }

    let game = games[round];
    let imgs = document.querySelectorAll(".game-grid img");

    document.getElementById("result").innerText =
        `Atrodi: ${game.name}`;

    game.options.forEach((option, index) => {

        imgs[index].classList.remove("correct", "wrong");
        imgs[index].src = "images/" + option.img;

        if (option.correct) {
            imgs[index].onclick = correctAnswer;
        } else {
            imgs[index].onclick = wrongAnswer;
        }
    });
}

// pareizi
function correctAnswer() {
    score++;
    document.getElementById("result").innerText = "🎉 Pareizi!";
    nextRound();
}

// nepareizi
function wrongAnswer() {
    document.getElementById("result").innerText = "❌ Nepareizi!";

    setTimeout(nextRound, 500);
}
// nākamais raunds
function nextRound() {
    round++;
    setTimeout(loadRound, 500);
}
