//  open code
const content = document.querySelectorAll(".content");
const box = document.getElementById("code");
const closeBtn = document.getElementById("close-x");

let isOpened = false;
// close code box

for (let i = 0; i < content.length; i++) {
  content[i].addEventListener("click", () => {
    window.scrollTo(0, 0);
    isOpened = true;
    box.style.display = "block";
    document.getElementById("doc-body").style.overflowY = "hidden";
  });
}

closeBtn.addEventListener("click", () => {
  isOpened = false;
  box.style.display = "none";
  document.getElementById("doc-body").style.overflowY = "scroll";
});
