let shareBtn = document.querySelector(".share-button")
let socials = document.querySelector(".socials")
let avatar = document.querySelector(".avatar")
let foot = document.querySelector(".foot")

shareBtn.addEventListener("click", () => {
  if (window.innerWidth < 850) {
    //for the Mobile view
    if (avatar.style.display !== "none") {
      avatar.style.display = "none"
      socials.style.display = "flex"
      socials.style.backgroundColor = "hsl(217, 19%, 35%)"
      socials.style.gap=30
    } else {
      avatar.style.display = "flex"
      socials.style.display = "none"
    }
  } else {
    // for the desktop view
    if (socials.style.display === "flex") {
      socials.style.display = "none"
    } else {
      socials.style.display = "flex"
      socials.style.backgroundColor = "hsl(217, 19%, 35%)" // normal background
    }
  }
});
