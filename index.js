
var randomFirstNumber = Math.floor(Math.random()*6)+1;//1-6
var randomSecondNumber = Math.floor(Math.random()*6)+1;//1-6

var randomDiceFirstImage = "images/dice" + randomFirstNumber + ".png";//dice1.png-dice6.png
var randomDiceSecondImage = "images/dice" + randomSecondNumber + ".png";//dice1.png-dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomDiceFirstImage);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceSecondImage);

if(randomFirstNumber > randomSecondNumber){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if(randomFirstNumber < randomSecondNumber) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
