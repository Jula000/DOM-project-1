const btn = document.querySelector("#emoji");

const emojis = [
  "😎",
  "🤓",
  "😇",
  "😍",
  "😘",
  "😚",
  "😌",
  "😒",
  "😓",
  "😔",
  "😕",
  "🙁",
  "😖",
  "😞",
  "😟",
  "😢",
  "😭",
  "😦",
  "😧",
  "😨",
  "😩",
  "😰",
  "😱",
  "😳",
  "😵",
  "😷",
  "🤒",
  "🤕",
  "🤢",
  "🤮",
  "🤧",
  "😈",
  "👿",
  "👹",
  "👺",
];

btn.addEventListener("mouseover", () => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  btn.innerText = emojis[randomIndex];
});
