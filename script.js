let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");
const params = new URLSearchParams(window.location.search);
let username = params.get("name");
const maxLength = 20;
const safeUsername = username ? username.substring(0, maxLength) : "???";
if (username) {
  questionText.innerText = questionText.innerText + safeUsername;
}
let clickCount = 0;
const noTexts = [
  "? Bé nghiêm túc chứ...",
  "Suy nghĩ lại nhé?",
  "Không được chọn cái này!",
  "Tui sẽ buồn lắm...",
  "Không được :(",
];
noButton.addEventListener("click", function () {
  clickCount++;
  let yesSize = 1 + clickCount * 1.2;
  yesButton.style.transform = `scale(${yesSize})`;
  let noOffset = clickCount * 100;
  noButton.style.transform = `translateX(${noOffset}px)`;
  let moveUp = clickCount * 25;
  mainImage.style.transform = `translateY(-${moveUp}px)`;
  questionText.style.transform = `translateY(-${moveUp}px)`;
  if (clickCount <= 5) {
    noButton.innerText = noTexts[clickCount - 1];
  }
  if (clickCount === 1) mainImage.src = "img/shocked.png";
  if (clickCount === 2) mainImage.src = "img/think.png";
  if (clickCount === 3) mainImage.src = "img/angry.png";
  if (clickCount === 4) mainImage.src = "img/crying.png";
  if (clickCount >= 5) mainImage.src = "img/crying.png";
});
const loveTest = `!!!Yêu bé!! ( >᎑<)♡︎ᐝ  ${
  username ? `${safeUsername}  ♡︎ᐝ(>᎑< )` : ""
}`;
yesButton.addEventListener("click", function () {
  document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text"></h1>
            <img src="img/hug.png" alt="ôm" class="yes-image">
        </div>
    `;
  document.querySelector(".yes-text").innerText = loveTest;
  document.body.style.overflow = "hidden";
});
