var yesBtn = document.getElementById("yes")
var noBtn = document.getElementById("no")
var bgText = document.getElementsByClassName("small")

function pressNo() {
  noBtn.remove()
}

function pressYes() {
  document.getElementById("bgText").style.animationName = "fade"
}

function rand(x) {
  Math.floor(Math.random()*x)
}