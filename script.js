document.addEventListener("DOMContentLoaded", function() {
const btn = document.querySelector("button");
const value = document.querySelector("#value") ; 
const div= document.querySelector("div");

//btn.addEventListener("click",  randomColor);
btn.addEventListener("click",  randomColor);



function randomColor (){

let r = Math.floor(Math.random()*255);
let g = Math.floor(Math.random()*255);
let b = Math.floor(Math.random()*255);
 let op = Math .floor(Math.random()*10)/10;
 
div.style.backgroundColor =`rgba(${r},${g},${b},${op})`;
value.innerHTML = `&nbsp rgba(${r}, ${g}, ${b}, ${op});`;
}
});
