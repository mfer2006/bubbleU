const gameArea = document.querySelector("#gameArea");
const scoreText = document.querySelector("#score");
const startButton = document.querySelector("#startButton");
const message = document.querySelector("#message");

const colors = [
  "rgba(184, 216, 192, 0.6)",
  "rgba(214, 199, 232, 0.6)",
  "rgba(240, 215, 181, 0.6)",
  "rgba(188, 215, 232, 0.6)",
  "rgba(243, 198, 211, 0.6)",
  "rgba(201, 228, 216, 0.6)"
];

let score = 0;

function createBubble() {
  const bubble = document.createElement("button");

  bubble.classList.add("bubble");

  const randomColor =
    colors[Math.floor(Math.random() * colors.length)];

  bubble.style.backgroundColor = randomColor;

  const randomSize = 50 + Math.random() * 50;

  bubble.style.width = randomSize + "px";
  bubble.style.height = randomSize + "px";

  const randomLeft = Math.random() * 85;
  const randomTop = Math.random() * 80;
  const randomDuration = 4 + Math.random() * 4;

  bubble.style.left = randomLeft + "%";
  bubble.style.top = randomTop + "%";
  bubble.style.animationDuration = randomDuration + "s";

  bubble.addEventListener("click", function () {
    score = score + 1;
    scoreText.innerText = score;

    bubble.classList.add("pop");

    if (score === 10) {
      message.innerText = "Nice. Take one slow breath.";
    }

    setTimeout(function () {
      bubble.remove();
      createBubble();
    }, 300);
  });

  gameArea.appendChild(bubble);
}

function startGame() {
  score = 0;

  scoreText.innerText = score;
  message.innerText = "";
  gameArea.innerHTML = "";

  for (let i = 0; i < 8; i++) {
    createBubble();
  }
}

startButton.addEventListener("click", startGame);