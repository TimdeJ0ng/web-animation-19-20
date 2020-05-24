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




var oogkasschaduwrechts = document.querySelector("#oogkas-rechts-schaduw");
var schaduw1 = document.getElementById("neus-schaduw");
var schaduw2 = document.getElementById("voorhoofd-snor-schaduw");
var schaduw3 = document.getElementById("voorhoofdschaduw");
var schaduw4 = document.getElementById("kin-schaduw");
var schaduw5 = document.getElementById("oogkas-links-schaduw");
var schaduw6 = document.getElementById("snor-schaduw");

oogkasschaduwrechts.addEventListener("click", function(){
   // console.log("hijdoethet");//
   schaduw1.classList.toggle("click");
   schaduw2.classList.toggle("click");
   schaduw3.classList.toggle("click");
   schaduw4.classList.toggle("click");
   schaduw5.classList.toggle("click");
   schaduw6.classList.toggle("click");
   oogkasschaduwrechts.classList.toggle("click");
});




var neus = document.querySelector("#neus");
var kin = document.getElementById("kin");
var voorhoofd = document.getElementById("voorhoofd");
var wenkbrouw = document.getElementById("wenkbrouw");
var snor = document.getElementById("snor");


neus.addEventListener("click", function(){
   // console.log("hijdoethet");//
   kin.classList.toggle("original");
   voorhoofd.classList.toggle("original");
   wenkbrouw.classList.toggle("original");
   snor.classList.toggle("original");
   neus.classList.toggle("original");
});

var neon = document.querySelector("svg");
var wenkbrouwneon = document.getElementById("wenkbrouw");



wenkbrouw.addEventListener("click", function(){
   // console.log("hijdoethet");//
   neon.classList.toggle("neon");

});


 
// // let eyeBall = document.querySelector(".st22"),
//     pupil = document.querySelector(".st23"),
//     eyeArea = eyeBall.getBoundingClientRect(),
//     pupilArea = pupil.getBoundingClientRect(),
//     R = eyeArea.width/2,
//     r = pupilArea.width/2,
//     centerX = eyeArea.left + R,
//     centerY = eyeArea.top + R;

// document.addEventListener("mousemove", (e)=>{
//   let x = e.clientX - centerX,
//       y = e.clientY - centerY,
//       theta = Math.atan2(y,x),
//       angle = theta*180/Math.PI + 360;
  
  
//   pupil.style.transform = `translateX(${R - r +"px"}) rotate(${angle + "deg"})`;
//   pupil.style.transformOrigin = `${r +"px"} center`;
// });





var letters = document.querySelector("p");
var body = document.querySelector("body");

letters.addEventListener("click", function(){
   console.log("hijdoethet");
   body.classList.toggle("kleur");

});





