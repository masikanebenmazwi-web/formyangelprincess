/* PRELOADER */
window.addEventListener("load", () => {
  const polaroids = document.querySelectorAll(".polaroid");
  const preloader = document.getElementById("preloader");

  polaroids.forEach(p => {
    p.style.setProperty("--r", `${Math.random() * 14 - 7}deg`);
  });

  let index = 0;

  function showNext() {
    if (index > 0) polaroids[index - 1].style.opacity = 0;

    if (index < polaroids.length) {
      polaroids[index].style.opacity = 1;
      polaroids[index].style.transform = "scale(1)";
      index++;
      setTimeout(showNext, 1300);
    } else {
      setTimeout(() => {
        preloader.style.opacity = 0;
        setTimeout(() => preloader.remove(), 1000);
      }, 800);
    }
  }

  showNext();
});

/* MAIN INTERACTION */
const envelope = document.getElementById("envelope");
const messageBox = document.getElementById("message");
const music = document.getElementById("bgMusic");

const messages = [
  "Hey my love 💕",
  "I made this just for you…",
  "Every moment with you feels special",
  "But there’s something I need to ask you…"
];

let step = 0;

document.body.addEventListener("click", () => {
  music.play();
  document.getElementById("musicHint").style.display = "none";
}, { once: true });

envelope.addEventListener("click", () => {
  if (step < messages.length) {
    messageBox.textContent = messages[step];
    messageBox.classList.remove("hidden");

    envelope.style.top = Math.random() * 70 + "vh";
    envelope.style.left = Math.random() * 70 + "vw";

    step++;
  } else {
    messageBox.innerHTML = `
      <h2 style="font-family:'Dancing Script';font-size:30px;">
        Will you be my Valentine? 💖
      </h2>
      <button onclick="yes()">YES 💕</button>
      <button id="noBtn">NO 😅</button>
    `;
    setTimeout(runNoButton, 100);
  }
});

function runNoButton() {
  const noBtn = document.getElementById("noBtn");
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 80 + "vh";
    noBtn.style.left = Math.random() * 80 + "vw";
  });
}

function yes() {
  document.body.innerHTML = `
    <div id="finalScreen">
      <h1>She said yes 💖</h1>
      <p>
        It's been a little over a year since I first laid eyes on you,
        and I'm yet to grow tired of your eyes resting on mine.
        You are my wildest dream come true.
        I thank God for you, my angel.
      </p>
    </div>
  `;
}

/* HEARTS */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 600);
