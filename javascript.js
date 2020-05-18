// achtergrond flippen 
var button = document.querySelector("g:first-of-type");
console.log(button)

var element = document.getElementById("achtergrond");

button.addEventListener("click", function(){
   // console.log("hijdoethet");//
   element.classList.toggle("background-rotate");
});



// ogen bewegen
var oog = document.querySelector("#oog-rechts");
var oogkas = document.getElementById("oogwit");
var oogkass = document.getElementById("oogwit1");

oog.addEventListener("click", function(){
   // console.log("hijdoethet");//
   oogkas.classList.toggle("beweeg");
   oogkass.classList.toggle("beweeg");
});



// invert kleur
var kleur = document.querySelector("body");
window.addEventListener('keydown', toggle)

function toggle (event){
   if(event.keyCode == 32){
      kleur.classList.toggle('kleur');
   }
}














