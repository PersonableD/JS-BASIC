//19/12/20

/* String
const what = "Nicolas";

console.log(what);
*/
/*
Boolean
const what = true;
*/
/*
Number
const what = 666;
*/
/*
float
const what = 55.1;
*/
/*
//array
const something = "Something"

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu","Fri", "Sat", "Sun", something]

console.log(daysOfWeek[0]);
*/
/*
//object
const nicoInfo = {
  name:"Nicolas",
  age: 33 ,
  gender:"Male", 
  isHandsome:true, 
  favMovies :["Bohemian Rhapsody","great showMan"],
   favFood:[
     {name:"Kimchi", fatty:false}, 
     {name:"Cheese burger", fatty:true}
     ]
      }

//console.log(nicoInfo.gender);

//nicoInfo.gender = "Female"

//console.log(nicoInfo.gender);

console.log(nicoInfo.favFood[1].name);
*/
/*
//19/12/21
function sayHello(name, age){
  console.log("hello", name,"you have", age, "yeats of age.");
}

sayHello("Seul", 23);
console.log();


function sayHello(name, age){
  return `Hello ${name} you are ${age} years old`;
}

const greetNicolas = sayHello("Nicolas", 14)

const calculator = {
plus: function(a,b){
  return a+b;
},

substact: function(a,b){
  return a-b;
},

multiply: function(a,b){
  return a*b;
},

divide: function(a,b){
  return a/b;
},

power: function(a,b){
  return a**b;
}

}

const plus = calculator.plus(5,5);
const substact = calculator.substact(5,5);
const multiply = calculator.multiply(5,5);
const divide = calculator.divide(5,5);
const power = calculator.power(5,5);

function sayCalculator(){
  return `${plus} ${substact} ${multiply} ${divide} ${power}`;
}

const cc = sayCalculator("say");

console.log(cc);

console.log(greetNicolas);




console.log(plus);
console.log(substact);
console.log(multiply);
console.log(divide);
console.log(power);



const title = document.querySelector("#title");

console.dir(title);

title.innerHTML = "Hi!From JS";
title.style.color = "red";
document.title ="I own you";
function handleClick(){
  title.style.color = "Blue";
}

title.addEventListener("click",handleClick);

if(10===5){
  console.log("Hi");
}
else
{console.log("ho");
}

const age =prompt("How old are you?")

console.log(age);

if (18<=age && age<=21){
  console.log("you can drink but you should not");
}
else if(age>21){
console.log("go ahead");
}
else{
  console.log("too young");
}


const title = document.querySelector("#title");

const BASE_COLOR ="rgb(229, 249, 252)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
const currentColor = title.style.color;
if(currentColor === BASE_COLOR){
title.style.color = OTHER_COLOR;
}else{
  title.style.color = BASE_COLOR;
}
}
//클릭 했을 때 베이스 컬러일 때는 다른컬러로 다른컬러일 때는 베이스 컬러로 바꿔줌
function init(){
title.style.color = BASE_COLOR;
title.addEventListener("click",handleClick);
}
init();

function handleOffline(){
  console.log("lalala");
}

window.addEventListener("offline", handleOffline);
//오프라인 일 때 실행되는 함수

*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
  const hasClass = title.classList.contains(CLICKED_CLASS);
  
  if(hasClass){
    title.classList.remove(CLICKED_CLASS);
  }else{
    title.classList.add(CLICKED_CLASS);
  }
  //calss'L'ist 대문자 주의하자 
  // title.classList.toggle(CLICKED_CLASS);
}

function init(){
  title.addEventListener("click", handleClick);
}

init();