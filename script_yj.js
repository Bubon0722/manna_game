const dialogues = [
  { text: "今天是2024年12月31日，禮拜二。", image: "image1.jpg" },
  { text: "早上八點，我帶著自己做的早餐，一如往常地來到哎哎咖啡。", image: "image1.jpg" },
  { text: "我面帶微笑，緩緩推開哎哎咖啡的大門...", image: "image1.jpg" },
  { text: "「弘麒哥呢？」", image: "image2.jpg" },
  { text: "竟然空無一人。", image: "image2.jpg" },
  { text: "「好吧。」見大家都不在，我也只好拉開椅子坐下，預備好準備靈修的心。", image: "image2.jpg" },
  { text: "但過了一個小時...", image: "image2.jpg" },
  { text: "仍然一個人都沒有。", image: "image2.jpg" },
  { text: "不只弘麒哥，連照理來說這時候會出現的采穎、劉董也都沒出現。", image: "image2.jpg" },
  { text: "我心想，大家是都去跨年了嗎？", image: "image2.jpg" },
  { text: "「反正有點無聊，開門呼吸一下新鮮空氣好了。」", image: "image2.jpg" },
  { text: "「...這門怎麼突然鎖住了，還轉不開？」", image: "image3.jpg" },
  { text: "「而且密碼鎖什麼時候反過來裝了？？」", image: "image4.jpg" },
  { text: "我打開手機平板，準備拍照傳到群組，跟伯宜哥確認這是怎麼肥事時...", image: "image2.jpg" },
  { text: "裝！置！沒！電！了！", image: "image2.jpg" }
];

const redirectUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfA95_jxTjqmylovOvyvMGw8YPq_59vpZLjnL8WENsrfAaU3Q/viewform"; // 替換為您的目標連結

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
