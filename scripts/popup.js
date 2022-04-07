let model = document.getElementById("myPopup1");
let modelContent = model.querySelector(".popup-content");
let closeBtn = document.querySelector(".closeBtn");
// When the user clicks the button, open the model

const forDarkMode = () => {
  setTimeout(() => {
    model.style.display = "block";
    modelContent.classList.add("animate__animated", "animate__fadeInDown"); //!   adding fade in animation when it appears
  }, 2000);

  closeBtn.addEventListener("click", () => {
    modelContent.classList.add("animate__animated", "animate__fadeOutDown");
    setTimeout(() => {
      model.style.display = "none";
    }, 600);
  });

  // When the user clicks anywhere outside of the model, close it
  window.onclick = function (event) {
    if (event.target == model) {
      modelContent.classList.add("animate__animated", "animate__fadeOutDown");
      setTimeout(() => {
        model.style.display = "none";
      }, 600);
    }
  };
};

//! for system theme detection and set the theme according to that STARTS
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  // window.location.reload(); //for reloding
  darkModeFunction();

  console.log("dark mode detected"); // dark mode
  forDarkMode();
} else {
  console.log("light mode detected"); // light mode
  setTimeout(() => {
    alert(
      "The webpage is in light mode, You can also try the dark mode by clicking on the top right corner icon."
    );
  }, 3000);
}
//for system theme detection and set the theme according to that ENDS
