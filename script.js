const dialogues = [
  { text: "這是第一則對話，白色文字逐字彈出。", image: "image1.jpg" },
  { text: "接著是第二則對話，同樣逐字顯示。", image: "image2.jpg" },
  { text: "最後一則對話，按一下跳轉至指定頁面。", image: "image3.jpg" }
];

const redirectUrl = "https://example.com"; // 替換為您的目標連結

let currentDialogueIndex = 0;
const textElement = document.getElementById('dialogue-text');
const backgroundElement = document.getElementById('background');

function typeText(text, callback) {
  let index = 0;
  textElement.textContent = '';
  const interval = setInterval(() => {
    if (index < text.length) {
      textElement.textContent += text[index];
      index++;
    } else {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 50); // 控制文字彈出的速度
}

function updateBackground(image) {
  backgroundElement.style.backgroundImage = `url(${image})`;
}

function showNextDialogue() {
  if (currentDialogueIndex < dialogues.length) {
    const currentDialogue = dialogues[currentDialogueIndex];
    typeText(currentDialogue.text);
    updateBackground(currentDialogue.image);
    currentDialogueIndex++;
  } else {
    window.location.href = redirectUrl;
  }
}

document.body.addEventListener('click', showNextDialogue);

// 初始化顯示第一則對話與背景
const initialDialogue = dialogues[currentDialogueIndex];
typeText(initialDialogue.text);
updateBackground(initialDialogue.image);
currentDialogueIndex++;
