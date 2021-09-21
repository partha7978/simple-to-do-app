const btn = document.querySelector(".dark-mode-button");
const i = document.querySelector(".dark-mode-icon");
let container = document.querySelector(".container");


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
  
})
