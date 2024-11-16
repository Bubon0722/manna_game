const dialogues = [
  { text: "嘟嘟！熟悉的鈴聲響起，我終於把門打開了！", image: "image4.jpg" },
  { text: "「新年快樂！」躲在一旁的弟兄姊妹們突然衝出，原來這一切都是預謀好給我的驚喜。", image: "image4.jpg" },
  { text: "「六二零四一二，是為了要讓聖經第62卷書、第04章、第12節，成為我們團契的提醒，要實踐出彼此相愛的使命啊。」", image: "image4.jpg" },
  { text: "突然，我感到一陣暈眩，倒了過去......", image: "image4.jpg" },
  { text: "「哥，這床太舒服了，你睡著了嗎？」", image: "image5.jpg" },
  { text: "我瞄了眼手機，現在是2024年11月22日的晚上九點。", image: "image5.jpg" },
  { text: "「快起來吧，等等就要揭曉小天使小主人的答案了，還有小天使還說要送150元星巴克禮券給他的小主人呢！」", image: "image5.jpg" },
  { text: "-- THE END --", image: "image5.jpg" },
  { text: "-- 請在揭曉當天拿著破關截圖向你的小天使領取星巴克禮券！ --", image: "image5.jpg"}
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
