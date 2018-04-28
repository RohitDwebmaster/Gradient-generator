var clr1=document.getElementById("color1");
var clr2=document.getElementById("color2");
var gradient=document.querySelector("body");

clr1.addEventListener("input",function(){

   gradient.style.background="linear-gradient(to right, "+ clr1.value +"  , "+ clr2.value +")";


})


clr2.addEventListener("input",function(){

   gradient.style.background="linear-gradient(to right, "+ clr1.value +"  , "+ clr2.value +")";


})