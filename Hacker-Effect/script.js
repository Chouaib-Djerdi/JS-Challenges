"use-strict";
const letters = "abcdefghijklmnopqrstuvwxyz";

document.querySelector("h1").onmouseover = (e) => {
  let iterations = 0;
  const interval = setInterval(() => {
    e.target.innerText = e.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return e.target.dataset.text[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (iterations >= e.target.dataset.text.length) clearInterval(interval);
    iterations += 1 / 3;
  }, 30);
};
