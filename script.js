const dialogues = [
  { text: "今天是2024年12月31日，禮拜二。", image: "image1.jpg" },
  { text: "中午，我一如往常地來到哎哎咖啡打工，協助點餐、做餐。", image: "image1.jpg" },
  { text: "「哈囉！」我推開門，熱情地打招呼－－", image: "image1.jpg" },
  { text: "空無一人。", image: "image2.jpg" },
  { text: "連照理來說這時候會出現的弘麒哥也不在。", image: "image2.jpg" },
  { text: "「好吧。」見沒人回應，我也只能站上崗位，開始備料、等待客人上門。", image: "image2.jpg" },
  { text: "但過了一個小時...", image: "image2.jpg" },
  { text: "仍然一個人都沒有。", image: "image2.jpg" },
  { text: "沒有客人、沒有伯宜哥、沒有團契的弟兄姊妹們。", image: "image2.jpg" },
  { text: "我心想，大家是都去跨年了嗎？", image: "image2.jpg" },
  { text: "「算了，等等還有那超鋼的行銷管理，我先去上課好了。」", image: "image2.jpg" },
  { text: "「靠杯，這門怎麼突然鎖住了，還轉不開！」", image: "image3.jpg" },
  { text: "「而且密碼鎖什麼時候反過來裝了？？」", image: "image4.jpg" },
  { text: "我拿起手機，準備打電話給伯宜哥求救，結果發現......", image: "image2.jpg" },
  { text: "手！機！沒！電！了！", image: "image2.jpg" }
];

const redirectUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdn7J7h8SNBwxiDdgn0JA7D3mm_s6HO99qXAZHqskNrVGaryQ/viewform"; // 替換為您的目標連結

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
