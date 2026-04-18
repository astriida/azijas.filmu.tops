document.getElementById('movieForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Neļauj lapai pārlādēties

    // Iegūst datus
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const feedback = document.getElementById('formFeedback');

    // Validācija un izvade
    if (name.length < 3) {
        feedback.innerHTML = "<p style='color: red;'>Vārdam jābūt vismaz 3 burtus garam!</p>";
    } else {
        feedback.innerHTML = `<p style='color: green;'>Paldies, ${name}! Tava rekomendācija ir saņemta.</p>`;
        
        // Konsolē izvada datu apstrādes simulāciju
        console.log("Apstrādātie dati:", {
            lietotājs: name,
            pasts: email,
            žanrs: document.getElementById('genre').value
        });

        this.reset(); // Notīra formu
    }
});

// Interaktivitāte: Konsoles paziņojums ielādējot lapu
window.onload = () => {
    console.log("Lapa ir gatava darbam!");
};


let round = 0;
const maxRounds = 3;

let score = 0; // pareizo atbilžu skaits

const images = [
    "images/parasite1.jpg",
    "images/spirited.jpg",
    "images/samurai.jpg"
];

let correctIndex = 0;

window.onload = startGame;

function startGame() {
    round = 0;
    score = 0;
    loadRound();
}

// ielādē raundu
function loadRound() {
    if (round >= maxRounds) {
        showFinalResult();
        return;
    }

    const imgElements = document.querySelectorAll(".game-grid img");

    let shuffled = [...images].sort(() => Math.random() - 0.5);

    correctIndex = Math.floor(Math.random() * 3);

    imgElements.forEach((img, index) => {
        img.src = shuffled[index];
        img.classList.remove("correct", "wrong");

        if (index === correctIndex) {
            img.onclick = correctAnswer;
        } else {
            img.onclick = wrongAnswer;
        }
    });

    document.getElementById("result").innerText =
        `🎮 Raunds ${round + 1} / ${maxRounds}`;
}

// pareizā atbilde
function correctAnswer() {
    score++; // palielina punktus

    document.getElementById("result").innerText =
        "🎉 Pareizi!";

    nextRound();
}

// nepareizā atbilde
function wrongAnswer() {
    document.getElementById("result").innerText =
        "❌ Nepareizi!";

    nextRound();
}

// nākamais raunds
function nextRound() {
    round++;

    setTimeout(() => {
        loadRound();
    }, 800);
}

// BEIGU REZULTĀTS
function showFinalResult() {
    document.getElementById("result").innerText =
        `🏁 Spēle beigusies! Tu uzminēji pareizi ${score} no ${maxRounds} reizēm.`;
}