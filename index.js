var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomdiceImage = "dice"+randomNumber1+".png";

var randomImagesource = "images/"+randomdiceImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImagesource);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomdiceImage1 = "dice"+randomNumber2+".png";

var randomImagesource1 = "images/"+randomdiceImage1;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImagesource1);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}

else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}

else{
    document.querySelector("h1").innerHTML="DRAW";
}