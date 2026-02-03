const envelope = document.getElementById("envelope");
const messageBox = document.getElementById("message");
const music = document.getElementById("bgMusic");

const HER_NAME = "Naledi"; // change name

const messages = [
  `Hey ${HER_NAME} 💕`,
  "I just wanted to say…",
  "You make my world brighter 🌸",
  "Life feels softer with you 💫",
  "There’s something important…"
];

let step = 0;

// start music on first tap
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
      <h2>Will you be my Valentine? 💖</h2>
      <button onclick="yes()">YES 💕</button>
      <button id="noBtn">No 😅</button>
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
    <h1 style="text-align:center;margin-top:40vh;color:#ff4d88;">
      YAYYYY 💖💖💖
    </h1>
  `;
}

// floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 600);
