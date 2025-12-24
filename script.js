document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".heart-btn");
  const msg = document.querySelector(".tap-msg");

  if (!btn) return;

  btn.addEventListener("click", () => {
    msg.innerText = "Always. Forever. Besties. 💞";

    for (let i = 0; i < 15; i++) {
      const heart = document.createElement("span");
      heart.innerText = "❤️";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = "100vh";
      heart.style.fontSize = "24px";
      heart.style.animation = "fly 3s linear";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 3000);
    }
  });
});

/* 💫 Heart animation */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fly {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100vh);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

if (musicBtn) {
  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicBtn.innerText = "Pause music ⏸️";
    } else {
      music.pause();
      musicBtn.innerText = "Play music 🎵";
    }
  });
}
const sparkleContainer = document.querySelector(".sparkles");

setInterval(() => {
  const sparkle = document.createElement("span");
  sparkle.innerHTML = Math.random() > 0.5 ? "✨" : "💖";
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.animationDuration = 4 + Math.random() * 3 + "s";

  sparkleContainer.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 7000);
}, 500);
