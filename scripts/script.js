let addButton = document.querySelector(".inputAddButton");
let ul  = document.querySelector("ul");
let textInput = document.querySelector(".input");
let time = document.querySelector(".inputTime");
let finish = document.querySelector(".fa-check");
let notFinish = document.querySelector(".fa-times");


addButton.addEventListener("click", function() {
    
    var li = document.createElement("li");
    var rightDiv = document.createElement("div");
    var middleDiv = document.createElement("div");
    var leftDiv = document.createElement("div");

    var serialNo = document.createElement("span");
    var time = document.createElement("span");

    var middleText = document.createElement("span");

    var rightIcon = document.createElement("i");
    var wrongIcon = document.createElement("i");

    rightDiv.classList.add("right");
    middleDiv.classList.add("middle");
    leftDiv.classList.add("left");

    serialNo.classList.add("list-number");


})
