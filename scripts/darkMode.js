const btn = document.querySelector(".dark-mode-button");
const i = document.querySelector(".dark-mode-icon");
let container = document.querySelector(".container");
let header = document.querySelector(".header");
let mainContent = document.querySelector(".main-content");
let inputTime = document.querySelector(".inputTime");
let input = document.querySelector(".input");
let inputBtn = document.querySelector(".inputAddButton");

let unorderedList = document.querySelector("ul");


btn.addEventListener("click", () =>{

   if(i.getAttribute("name") === "moon-sharp") {
       i.classList.toggle(i.setAttribute("name", "sunny-sharp"));
   }
   else
   {
    i.classList.toggle(i.setAttribute("name", "moon-sharp"));
   }

   //for adding dark mode in lists starts
    //    console.log(unorderedList.childNodes.length);
   
   if(unorderedList.childNodes.length-3 > 0) {
       console.log("working");
       let lists = document.querySelectorAll("li");
        // console.log(lists[1]);
        // console.log(lists);
        // console.log(lists.length, "list length");
        for(let i=0; i<= lists.length-1; i++) {
            lists[i].classList.toggle("li-hover-shadow");
            lists[i].classList.toggle("li-dark-color");
        }
    
   }
   //for adding dark mode in lists ends

   container.classList.toggle("dark-mode-color");
   header.classList.toggle("dark-mode-color");
   btn.classList.toggle("dark-mode-color-for-btn");
   mainContent.classList.toggle("main-content-dark-mode");
   inputTime.classList.toggle("input-dark-mode");
   input.classList.toggle("input-dark-mode");
   inputBtn.classList.toggle("btn-dark-color");
   
//    lists.classList.toggle("li-hover-shadow");
})
