const colorCode = document.getElementById("colorCode");
const boxContainer = document.getElementById("boxContainer");
const result = document.getElementById("result");

let targetColor = "";

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function startGame() {
  boxContainer.innerHTML = "";
  result.textContent = "";

  const colors = [];
  for (let i = 0; i < 6; i++) {
    const color = getRandomColor();
    colors.push(color);
  }

  targetColor = colors[Math.floor(Math.random() * colors.length)];
  colorCode.textContent = targetColor;

  colors.forEach(color => {
    const div = document.createElement("div");
    div.classList.add("color-box");
    div.style.backgroundColor = color;
    div.addEventListener("click", () => {
      if (color === targetColor) {
        result.textContent = "✅ সঠিক!";
        document.body.style.backgroundColor = targetColor;
      } else {
        result.textContent = "❌ ভুল! আবার চেষ্টা করো।";
      }
    });
    boxContainer.appendChild(div);
  });
}

startGame();
