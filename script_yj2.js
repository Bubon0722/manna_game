const dialogues = [
  { text: "嘟嘟！熟悉的鈴聲響起，我終於把門打開了！", image: "image4.jpg" },
  { text: "「新年快樂！」躲在一旁的弟兄姊妹們突然衝出，原來這一切都是預謀好給我的驚喜。", image: "image4.jpg" },
  { text: "「六二零四一二，你知道這個密碼是什麼意思嗎？」", image: "image4.jpg" },
  { text: "「我...」正要回答，我突然卻感到一陣暈眩，倒了過去.......", image: "image4.jpg" },
  { text: "「姊，這床太舒服了，你睡著了嗎？」", image: "image5.jpg" },
  { text: "我瞄了眼手機，現在是2024年11月22日的晚上九點。", image: "image5.jpg" },
  { text: "「快起來吧，等等就要揭曉小天使小主人的答案了，說不定會有什麼驚喜呢！」", image: "image5.jpg" },
  { text: "-- THE END --", image: "image5.jpg" },
  { text: "-- 請在揭曉當天拿著破關截圖領取驚喜小禮！ --", image: "image5.jpg"}
];

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
    ;
  }
}

document.body.addEventListener('click', showNextDialogue);

// 初始化顯示第一則對話與背景
const initialDialogue = dialogues[currentDialogueIndex];
typeText(initialDialogue.text);
updateBackground(initialDialogue.image);
currentDialogueIndex++;
