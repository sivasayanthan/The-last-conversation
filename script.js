const questions = [

"Would you still chase your biggest dream if nobody ever knew your name?",

"If success required 10 years of failure, would you continue?",

"Which is worse: failing... or never discovering your true potential?",

"Would you erase your worst memory if it also erased an important lesson?",

"What are you pretending not to know?"

];

let currentQuestion = 0;

let answers = [];

const startBtn = document.getElementById("startBtn");

const container = document.querySelector(".container");

const conversation = document.getElementById("conversation");

const line1 = document.getElementById("line1");

const line2 = document.getElementById("line2");

const line3 = document.getElementById("line3");

const questionBox = document.getElementById("questionBox");

const questionNumber = document.getElementById("questionNumber");

const questionText = document.getElementById("questionText");

const ending = document.getElementById("ending");

startBtn.addEventListener("click", startConversation);

function startConversation(){

container.classList.add("hidden");

conversation.classList.remove("hidden");

typeLine(line1,
"Connection Established...",
100,

function(){

typeLine(line2,
"Identity Unknown...",
100,

function(){

typeLine(line3,
"Beginning Final Session...",
100,

function(){

setTimeout(showQuestion,1200);

});

});

});

}

function typeLine(element,text,speed,callback){

element.innerHTML="";

let i=0;

let interval=setInterval(function(){

element.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(interval);

if(callback){

callback();

}

}

},speed);

}
function showQuestion(){

questionBox.classList.remove("hidden");

questionNumber.innerHTML="Question "+(currentQuestion+1)+" of 5";

questionText.innerHTML=questions[currentQuestion];

const area = document.getElementById("answerArea");

if(currentQuestion === 2 || currentQuestion === 4){

area.innerHTML = `
<input id="textAnswer" 
placeholder="Type your answer..." 
style="padding:15px;width:80%;font-size:18px;background:black;color:white;border:1px solid white;">

<br><br>
<button id="submitTextBtn">
SUBMIT
</button>


}
else{

area.innerHTML = `

<button onclick="answer('YES')">YES</button>

<button onclick="answer('NO')">NO</button>

`;

}

}


function submitTextAnswer(){

const input = document.getElementById("textAnswer").value;

if(input.trim()==""){
    return;
}

answers.push({
    question: questions[currentQuestion],
    answer: input
});

questionBox.classList.add("hidden");

currentQuestion++;

if(currentQuestion >= questions.length){

    setTimeout(showEnding,1000);

}
else{

    setTimeout(showQuestion,1000);

}

  }

function answer(choice){

answers.push({

question:questions[currentQuestion],

answer:choice

});

questionBox.classList.add("hidden");

currentQuestion++;

if(currentQuestion>=questions.length){

setTimeout(showEnding,1500);

return;

}

setTimeout(function(){

if(currentQuestion===4){

line1.innerHTML="";
line2.innerHTML="";
line3.innerHTML="";

typeLine(

line1,

"Previous answers archived...",

70,

function(){

typeLine(

line2,

"Only one question remains...",

70,

function(){

typeLine(

line3,

"Answer carefully.",

70,

function(){

showQuestion();

});

});

});

}

else{

showQuestion();

}

},1000);

}

function showEnding(){

conversation.classList.add("hidden");

ending.classList.remove("hidden");

}
const finalMessages = [

"You never answered my questions.",

"You answered yourself.",

"Every choice you made revealed a small part of how you think.",

"I cannot predict your future.",

"But your next decision will shape it more than anything I could say.",

"This conversation is over.",

"The rest belongs to you."

];

function showEnding(){

conversation.classList.add("hidden");

ending.classList.remove("hidden");

ending.innerHTML="";

typeEnding(0);

}

function typeEnding(index){

if(index>=finalMessages.length){

return;

}

const p=document.createElement("p");

p.style.fontSize="28px";

p.style.margin="25px";

p.style.opacity="0";

ending.appendChild(p);

fadeInText(p,finalMessages[index],0,function(){

setTimeout(function(){

typeEnding(index+1);

},1200);

});

}

function fadeInText(element,text,i,callback){

element.style.opacity="1";

if(i<text.length){

element.innerHTML+=text.charAt(i);

setTimeout(function(){

fadeInText(element,text,i+1,callback);

},45);

}

else{

if(callback){

callback();

}

}

  } 
  document.addEventListener("click", function(e){

if(e.target.id === "submitTextBtn"){

let input = document.getElementById("textAnswer").value;

if(input.trim()===""){
alert("Please write an answer");
return;
}

answers.push({
question: questions[currentQuestion],
answer: input
});


questionBox.classList.add("hidden");

currentQuestion++;


if(currentQuestion >= questions.length){

setTimeout(showEnding,1000);

}
else{

setTimeout(showQuestion,1000);

}

}

});
