const btn = document.querySelector(".dark-mode-button");
const i = document.querySelector(".dark-mode-icon");
let container = document.querySelector(".container");
let header = document.querySelector(".header");
let mainContent = document.querySelector(".main-content");
let inputTime = document.querySelector(".inputTime");
let input = document.querySelector(".input");
let inputBtn = document.querySelector(".inputAddButton");

btn.addEventListener("click", () =>{

   if(i.getAttribute("name") === "moon-sharp") {
       console.log("moon detected");
       i.classList.toggle(i.setAttribute("name", "sunny-sharp"));
   }
   else
   {
    i.classList.toggle(i.setAttribute("name", "moon-sharp"));
   }
 

   container.classList.toggle("dark-mode-color");
   header.classList.toggle("dark-mode-color");
   btn.classList.toggle("dark-mode-color-for-btn");
   mainContent.classList.toggle("main-content-dark-mode");
   inputTime.classList.toggle("input-dark-mode");
   input.classList.toggle("input-dark-mode");
   inputBtn.classList.toggle("btn-dark-color");
})
