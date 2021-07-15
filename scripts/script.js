let addButton = document.querySelector(".inputAddButton");
let ul = document.querySelector("ul");
let textInput = document.querySelector(".input");
let time = document.querySelector(".inputTime");
// let finish = document.querySelector(".fa-check");
// let notFinish = document.querySelector(".fa-times");


const addList = () => {
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
    time.classList.add("time-list");

    middleText.classList.add("main-list-content");

    rightIcon.classList.add("fas", "fa-check");
    wrongIcon.classList.add("fas", "fa-times");

    rightDiv.appendChild(serialNo);
    rightDiv.appendChild(time);

    middleDiv.appendChild(middleText);

    leftDiv.appendChild(rightIcon);
    leftDiv.appendChild(wrongIcon);

    li.appendChild(rightDiv);
    li.appendChild(middleDiv);
    li.appendChild(leftDiv);

    ul.appendChild(li);

    middleText.appendChild(document.createTextNode(textInput.value));
    textInput.value = "";
}

const removeList = function(e) {
    e.target.parentNode.parentNode.remove();
}

addButton.addEventListener("click", function () {
    if (textInput.value.length > 0) {
        // for add
        addList();

        // for remove
      
        let notFinish = document.querySelector(".fa-times");
        notFinish.addEventListener("click", removeList);


        // for toggle
        let finish = document.querySelector(".fa-check");
        let text = document.querySelector(".main-list-content");
        finish.addEventListener("click", function () {
           console.log("working");
           text.classList.toggle("toggle");
        })
    }
});


