var noBtn = document.getElementById("no")

function pressYes() {
  noBtn.remove()
}

function pressNo() {
  document.getElementById("bgText").style.animationName = "fade"
}