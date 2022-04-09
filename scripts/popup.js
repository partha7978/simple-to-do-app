let model = document.getElementById("myPopup1");
let modelContent = model.querySelector(".popup-content");
let closeBtn = document.querySelector(".closeBtn");

let model2 = document.getElementById("myPopup2");
let modelContent2 = model2.querySelector(".popup-content2");
let closeBtn2 = document.querySelector(".close-btn2")


let generalPopup = document.getElementById("generalPopup");
let generalPopupContent = generalPopup.querySelector(".popup-content-general");
let closeBtnGeneral = document.querySelector(".general-close-btn");


let btnDark= document.querySelector(".btn-dark");
let btnLight= document.querySelector(".btn-light");



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
  window.onclick = function (e) {
    if (e.target == model) {
      modelContent.classList.add("animate__animated", "animate__fadeOutDown");
      setTimeout(() => {
        model.style.display = "none";
      }, 600);
    }
  };
};


const forLightMode = () => {
  setTimeout(() => {
    model2.style.display = "block";
    modelContent2.classList.add("animate__animated", "animate__fadeInDown"); //!   adding fade in animation when it appears
  }, 2000);


  closeBtn2.addEventListener("click", () => {
    modelContent2.classList.add("animate__animated", "animate__fadeOutDown");
    setTimeout(() => {
      model2.style.display = "none";
    }, 600);
  });

  // When the user clicks anywhere outside of the model, close it
  window.onclick = function (e) {
    if (e.target == model2) {
      modelContent2.classList.add("animate__animated", "animate__fadeOutDown");
      setTimeout(() => {
        model2.style.display = "none";
      }, 600);
    }
  };
}


const generalPopupFunforLight = () => {
  setTimeout(() => {
    generalPopup.style.display = "block";
    generalPopupContent.classList.add("animate__animated", "animate__fadeInUp"); //!   adding fade in animation when it appears
  }, 1500);

  closeBtnGeneral.addEventListener("click", () => {
    generalPopupContent.classList.add("animate__animated", "animate__fadeOutDown");
    setTimeout(() => {
      generalPopup.style.display = "none";
    }, 600);
  });


}

const generalPopupFunforDark = () => {
  generalPopupContent.classList.add("popup-content-general-light");
  closeBtnGeneral.classList.add("general-close-btn-dark");

  setTimeout(() => {
    generalPopup.style.display = "block";
    generalPopupContent.classList.add("animate__animated", "animate__fadeInUp"); //!   adding fade in animation when it appears
  }, 1500);

  closeBtnGeneral.addEventListener("click", () => {
    generalPopupContent.classList.add("animate__animated", "animate__fadeOutDown");
    setTimeout(() => {
      generalPopup.style.display = "none";
    }, 600);
  });

}


//! for system theme detection and set the theme according to that STARTS
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  // window.location.reload(); //for reloding
  darkModeFunction();

  console.log("dark mode detected"); // dark mode
  forDarkMode();
}
else
{
  console.log("light mode detected"); // light mode
  forLightMode();
}
//for system theme detection and set the theme according to that ENDS





//! showing custom popup regarding tutorial of this app

btnDark.addEventListener("click", () => {
  generalPopupFunforLight();
});
btnLight.addEventListener("click", () => {
  generalPopupFunforDark();
});

