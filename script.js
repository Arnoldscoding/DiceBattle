let randomNumber1=Math.floor(Math.random()*6+1);
let randomNumber2=Math.floor(Math.random()*6+1);

//Select Random Numbers
let randomDiceImage1="dice"+randomNumber1+".png";
let randomDiceImage2="dice"+randomNumber2+".png";

//Accessing the images using DOM.
let image1=document.getElementById("image1");
let image2=document.getElementById("image2");

//Accessing the image source attribute.
image1.setAttribute("src",randomDiceImage1);
image2.setAttribute("src",randomDiceImage2);

//Conditional Statement
if (randomNumber1>randomNumber2) {
    document.getElementById("result").innerHTML="Arnold is the Winner!!";
}
else if (randomNumber1<randomNumber2) {
    document.getElementById("result").innerHTML="Priyansh is the Winner!!";
}
else if (randomNumber1=randomNumber2) {
    document.getElementById("result").innerHTML="It's a Draw";
}



