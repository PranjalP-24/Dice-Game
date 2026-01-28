var n = Math.random();
n = n*6;
n = Math.floor(n) + 1;
var randomNumber1 = n;  //1-6

var randomDiceImage = "dice"+ randomNumber1+ ".png"; //dice1.png to dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png to images/dice6.png
var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);




var m = Math.random();
m = m*6;
m = Math.floor(m) + 1;
var randomNumber2 = m;

var randomImageSource2 = "images/dice"+ randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);



if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player1 wins!!"
}else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML="WOW It's a Draw!!🙂"
}else{
    document.querySelector("h1").innerHTML="Player2 wins!!🚩";
}