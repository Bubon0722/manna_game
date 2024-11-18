const dialogues = [
  { text: "今天是2024年12月31日，禮拜二。", image: "image1.jpg" },
  { text: "我身為社長，中午一如往常地來到哎哎咖啡打卡，看看有沒有什麼新鮮事。", image: "image1.jpg" },
  { text: "「早啊！」我推開門，看似若無其事的一天。", image: "image1.jpg" },
  { text: "直到下午一點半，客人已經離開，其他弟兄姊妹也都去上課了。", image: "image2.jpg" },
  { text: "「嘉晏我去上個廁所」浩揚說。", image: "image2.jpg" },
  { text: "我聽到後點了點頭，繼續讀著我的行政爭訟法。", image: "image2.jpg" },
  { text: "但過了十分鐘...", image: "image2.jpg" },
  { text: "二十分鐘...", image: "image2.jpg" },
  { text: "浩揚沒有回來。", image: "image2.jpg" },
  { text: "連伯宜哥、弘麒哥、智洋都不知道去哪裡了。", image: "image2.jpg" },
  { text: "我心想，大家是都提早去跨年了嗎？", image: "image2.jpg" },
  { text: "反正時間也差不多了，我起身準備也要去教室上課。", image: "image2.jpg" },
  { text: "「咦，這門怎麼突然鎖住了，還轉不開啊？」", image: "image3.jpg" },
  { text: "「而且密碼鎖什麼時候反過來裝了？？」", image: "image4.jpg" },
  { text: "「...好啊，現在是怎樣。」我無奈地邊說邊笑，同時打開手機平板，準備打電話問是怎麼回事時...", image: "image2.jpg" },
  { text: "裝！置！沒！電！了！", image: "image2.jpg" }
];

const redirectUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf5NZtMBRb4JeLIpzQUpHe8fN5YxnzCJJd3WlhZIRjnntbgUA/viewform"; // 替換為您的目標連結

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
