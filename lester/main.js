var yesBtn = document.getElementById("yes")

function pressYes() {
  yesBtn.remove()
}

function pressNo() {
  document.getElementById("bgText").style.animationName = "fade"
}