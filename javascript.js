var button = document.querySelector("g:first-of-type");
console.log(button)

var element = document.getElementById("achtergrond");

button.addEventListener("click", function(){
   // console.log("hijdoethet");//
   element.classList.toggle("background-rotate");
});




var oog = document.querySelector("g:nth-of-type(4)");
console.log(button)

var oogkas = document.getElementById("oogkas-links");

oog.addEventListener("click", function(){
   // console.log("hijdoethet");//
   oogkas.classList.toggle("animate__flip");
});