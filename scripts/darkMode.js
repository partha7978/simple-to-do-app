const btn = document.querySelector(".dark-mode-button");
const i = document.querySelector(".dark-mode-icon");
let container = document.querySelector(".container");
let header = document.querySelector(".header");
let mainContent = document.querySelector(".main-content");
let inputTime = document.querySelector(".inputTime");
let input = document.querySelector(".input");
let inputBtn = document.querySelector(".inputAddButton");
let textInputByKeypress = document.querySelector(".input");
let unorderedList = document.querySelector("ul");

btn.addEventListener("click", () => {
  darkModeFunction();
  listDarkMode();
});

const darkModeFunction = () => {
  if (i.getAttribute("name") === "moon-sharp") {
    i.classList.toggle(i.setAttribute("name", "sunny-sharp"));
  } else {
    i.classList.toggle(i.setAttribute("name", "moon-sharp"));
  }

  container.classList.toggle("dark-mode-color");
  header.classList.toggle("dark-mode-color");
  btn.classList.toggle("dark-mode-color-for-btn");
  mainContent.classList.toggle("main-content-dark-mode");
  inputTime.classList.toggle("input-dark-mode");
  input.classList.toggle("input-dark-mode");
  inputBtn.classList.toggle("btn-dark-color");
};

const listDarkMode = () => {
  //for adding dark mode in lists starts
  //    console.log(unorderedList.childNodes.length);

  if (unorderedList.childNodes.length - 3 > 0) {
    console.log("working");
    let lists = document.querySelectorAll("li");
    // console.log(lists[1]);
    // console.log(lists);
    // console.log(lists.length, "list length");
    for (let i = 0; i <= lists.length - 1; i++) {
      lists[i].classList.toggle("li-hover-shadow");
      lists[i].classList.toggle("li-dark-color");

      if (document.querySelector(".li-hover-shadow")) {
        console.log("li detected");
      }
    }
  }
  //for adding dark mode in lists ends
};

// for update the color during adding of lists starts

const listDarkModeUpdate = () => {
  let addingList = document.querySelectorAll("li");
  if (document.querySelector(".dark-mode-color")) {
    //  console.log(addingList.length, "size");

    for (let i = addingList.length - 1; i >= 0; i--) {
      addingList[i].classList.remove("li-hover-shadow");
      addingList[i].classList.add("li-dark-color");
    }

  } 
  else
  {
    for (let i = addingList.length - 1; i >= 0; i--) {
      addingList[i].classList.remove("li-dark-color");
      addingList[i].classList.add("li-hover-shadow");
    }
  }
};

inputBtn.addEventListener("click", () => {
  listDarkModeUpdate();
});

textInputByKeypress.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    listDarkModeUpdate();
  }
});
















// for update the color during adding of lists ENDS here

//for system theme detection and set the theme according to that STARTS
// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//   // window.location.reload(); //for reloding
//   darkModeFunction();

// console.log("dark mode detected");   // dark mode
//   setTimeout(() => {
//       alert("The webpage is in dark mode, You can also try the light mode by clicking on the top right corner icon.")
//   }, 3000);
  
// }
// else
// {
//   console.log("light mode detected"); // light mode
//   setTimeout(() => {
//       alert("The webpage is in light mode, You can also try the dark mode by clicking on the top right corner icon.")
//   }, 3000);
// }
//for system theme detection and set the theme according to that ENDS