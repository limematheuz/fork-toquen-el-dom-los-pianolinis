const LIGHTKEYS = ["a", "s", "d", "f", "g", "h", "j"];
const DARKKEYS = ["w", "e", "t", "y", "u"];

const notes = document.querySelectorAll(".key");
const lightKeys = document.querySelectorAll(".key.light");
const darkKeys = document.querySelectorAll(".key.dark");

notes.forEach((note) => {
  note.addEventListener("click", () => playNote(note));
});

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key;
  const lightKeyIndex = LIGHTKEYS.indexOf(key);
  const darkKeysIndex = DARKKEYS.indexOf(key);

  if (lightKeyIndex > -1) playNote(lightKeys[lightKeyIndex]);
  if (darkKeysIndex > -1) playNote(darkKeys[darkKeysIndex]);
});

function playNote(key) {
  const audio = document.getElementById(key.dataset.note);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("active");
  setTimeout(() => {
    key.classList.remove("active");
  }, 100);
}

document.addEventListener("DOMContentLoaded", function () {
  let linkStart = document.getElementById("link-start");
  let crabIcon = document.querySelector(".crab-icon");

  linkStart.addEventListener("click", function (event) {
    event.preventDefault();

    setTimeout(() => {
      let audio2 = new Audio("./audio/bajo-el-mar.mp3");
      audio2.play();
    }, 1500);

    let audio = new Audio("./audio/bubbles.mp3");

    audio.play();

    let targetSection = document.querySelector("#second-section");
    let targetOffset = targetSection.offsetTop;

    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });

    setTimeout(function () {
      crabIcon.style.display = "block";
    }, 100);
  });
});

function createListenerMenu() {
  const menuButton = document.getElementById("burguer-icon");
  const menuElement = document.getElementById("burguer-menu-container");
  const menuElementMobile = document.querySelector(".menu-mobile");
  const closeMenu = document.querySelector("#logo-close-menu");

  menuButton.addEventListener("click", () => {
    menuElementMobile.classList.toggle("show");
  });
  closeMenu.addEventListener("click", () => {
    menuElement.classList.toggle("hide");
    menuElementMobile.classList.remove("show");
  });
}

createListenerMenu();
