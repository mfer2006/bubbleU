const breathingCircle = document.querySelector("#breathingCircle");
const breathingText = document.querySelector("#breathingText");
const breathingButton = document.querySelector("#breathingButton");

const groundingButton = document.querySelector("#groundingButton");
const groundingPrompt = document.querySelector("#groundingPrompt");

let breathing = false;
let groundingStep = 0;

const groundingPrompts = [
  "Name 5 things you can see.",
  "Name 4 things you can touch.",
  "Name 3 things you can hear.",
  "Name 2 things you can smell.",
  "Name 1 thing you can taste."
];

function startBreathing() {
  if (breathing === false) {
    breathing = true;

    breathingText.innerText = "Breathe in...";
    breathingCircle.classList.add("breathe-in");

    setTimeout(function () {
      breathingText.innerText = "Breathe out...";
      breathingCircle.classList.remove("breathe-in");
      breathingCircle.classList.add("breathe-out");
    }, 4000);

    setTimeout(function () {
      breathing = false;
      breathingText.innerText = "Take another breath when you're ready.";
      breathingCircle.classList.remove("breathe-out");
    }, 8000);
  }
}

function nextGroundingStep() {
  groundingPrompt.innerText = groundingPrompts[groundingStep];

  groundingStep = groundingStep + 1;

  if (groundingStep === groundingPrompts.length) {
    groundingStep = 0;
  }
}

breathingButton.addEventListener("click", startBreathing);
groundingButton.addEventListener("click", nextGroundingStep);