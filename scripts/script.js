let addButton = document.querySelector(".inputAddButton");
let ul = document.querySelector("ul");
let textInput = document.querySelector(".input");
let timeAdd = document.querySelector(".inputTime");

const main = function() {
     // for add
     let li = document.createElement("li");
     let rightDiv = document.createElement("div");
     let middleDiv = document.createElement("div");
     let leftDiv = document.createElement("div");
 
     let serialNo = document.createElement("span");
     let time = document.createElement("span");
 
     let middleText = document.createElement("span");
 
     let rightIcon = document.createElement("i");
     let wrongIcon = document.createElement("i");
 
     rightDiv.classList.add("right");
     middleDiv.classList.add("middle");
     leftDiv.classList.add("left");
 
     serialNo.classList.add("list-number");
     time.classList.add("time-list");
 
     middleText.classList.add("main-list-content");
 
     rightIcon.classList.add("fas", "fa-check");
     wrongIcon.classList.add("fas", "fa-trash-alt");
 
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

     //for serial number 
     let lists = document.getElementsByTagName("li");
     serialNo.innerText = lists.length;
    //  console.log(lists.length, "list serial number");



     //for time adding
     let link =
     document.querySelector(
       ".inputTime").value;
     time.innerHTML = link;



     // for remove
     wrongIcon.onclick = (e) => {
        e.target.parentNode.parentNode.remove();



            //for serial number update After EVERY DELETION---------------
            let ul = document.querySelector("ul");

            let ulArr = [];
            for(let i= 3; i<= ul.childNodes.length - 1; i++) {
                ulArr.push(ul.childNodes[i]);
                ul.childNodes[i].childNodes[0].childNodes[0].innerText = i-2;
            }
            // console.log(ulArr, "arrayof Ul");
 
     };



     // for toggle
     rightIcon.addEventListener("click", function (e) {
         middleText.classList.toggle("toggle");
         rightIcon.classList.toggle("fa-redo-alt");
         rightIcon.classList.toggle("fa-check");
     })
}



const addlistAfterClick = () => {
    if (textInput.value.length > 0 && timeAdd.value > "0") {
        main();
    }
    else {
        alert("OOps! You forget to add time or content. Please add it  🤗");
    }
}

const addListAfterKeypress = (event) => {
    if (textInput.value.length > 0 && event.keyCode ===13) {
        if(timeAdd.value > "0") {
            main();
        }
        else 
        {
            alert("OOps! You forget to add time or content. Please add it  🤗");
        }
    }
}
addButton.addEventListener("click", addlistAfterClick);
textInput.addEventListener("keypress", addListAfterKeypress);


