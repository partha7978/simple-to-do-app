let addButton = document.querySelector(".inputAddButton");
let ul = document.querySelector("ul");
let textInput = document.querySelector(".input");
let timeAdd = document.querySelector(".inputTime");


const addlistAfterClick = function() {
    if (textInput.value.length > 0 && timeAdd.value > "0") {
        // for add
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
        var lists = document.getElementsByTagName("li");
        serialNo.innerText = lists.length;

        //for time adding
        var link =
        document.querySelector(
          ".inputTime").value;
          console.log(link);
        time.innerHTML = link;

        // for remove
        wrongIcon.onclick = function(e) {
            console.log("click");
           e.target.parentNode.parentNode.remove();
        };

        // for toggle
        rightIcon.addEventListener("click", function (e) {
            middleText.classList.toggle("toggle");
            rightIcon.classList.toggle("fa-redo-alt");
            rightIcon.classList.toggle("fa-check");
        })
      
    }
    else {
        alert("OOps! You forget to add time or content. Please add it  🤗");
    }
}

const addListAfterKeypress = function(event) {
    if (textInput.value.length > 0 && event.keyCode ===13) {
        if(timeAdd.value > "0") {
                        // for add
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
            var lists = document.getElementsByTagName("li");
            serialNo.innerText = lists.length;

            //for time adding
            var link =
            document.querySelector(
            ".inputTime").value;
            console.log(link);
            time.innerHTML = link;

            // for remove
            wrongIcon.onclick = function(e) {
                console.log("click");
            e.target.parentNode.parentNode.remove();
            };

            // for toggle
            rightIcon.addEventListener("click", function (e) {
                middleText.classList.toggle("toggle");
                rightIcon.classList.toggle("fa-redo-alt");
                rightIcon.classList.toggle("fa-check");
            })
        }
        else 
        {
            alert("OOps! You forget to add time or content. Please add it  🤗");
        }

      
    }
}
addButton.addEventListener("click", addlistAfterClick);
textInput.addEventListener("keypress", addListAfterKeypress);


