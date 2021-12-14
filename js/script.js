/*
  
   Eight ball majic project
   Author: SISAY AREAYA
   Date:   4/10/2021  
   

*/

const div = document.getElementById("div");
const btn = document.getElementById("button");
const input = document.querySelector('input');
const paragraph = document. querySelector("#paragraph");
const lab = document.getElementById("label1")
const h5 = document.querySelector('h5');
const divCircle= document.querySelector('#circle').style.animation='spin1 1s linear infinite';
const bodyBackground = document.querySelector('#body-background');

var answers = ["As i see it yes","Ask again later","It is certain","Don't count on it","It is decidedly so","Concentrate and ask again","Better not tell you now"];
var randomNumber = Math.floor(Math.random()*answers.length);
// console.log(randomNumber)
function ask(){
    setTimeout(function(){
        location.reload();
      },4000);
    if (input.value == ""){
        alert("Enter your question!")  
        // console.log("input is requred")
        document.getElementById("paragraph").innerHTML= "";
        lab.innerText = "Type again the question";
    } else {

    var randomResponse = answers[randomNumber];
    document.getElementById("paragraph").innerHTML=randomResponse;
    btn.innerText = 'Answer'
    input.remove();
    // btn.remove();
    lab.remove();
    h5.innerText=input.value;
    document.querySelector('#circle').style.animation='idle 6s linear infinite';
}
}

document.getElementById('button').addEventListener("click", ask);

const colorPic1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorPic2=["A", "B", "C", "D", "E", "F",0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let paragraphColor = '#';
let bodyBackgroundColor = '#'

for (let i = 0; i < 6; i++){
    paragraphColor += colorPic1[randomNumb()];
    bodyBackgroundColor += colorPic2[randomNumb()]
}

paragraph.style.backgroundColor = paragraphColor;
bodyBackground.style.backgroundColor = bodyBackgroundColor;

function randomNumb() {
    return Math.floor(Math.random() * colorPic1.length);
    return Math.floor(Math.random() * colorPic2.length);
}