let insertData = (sn, time, task) => {
    let temp = `<li>
        <div class="right">
            <span class="list-number">${sn}.</span>
            <span class="time-list">${time} PM</span>
        </div>
        <div class="middle">
            <span class="main-list-content">${task} </span>
        </div>
        <div class="left">
            <i class="fas fa-check"></i>
            <i class="fas fa-trash-alt"></i>
        </div>
    </li>`
    return temp;
}

let displayData = () => {
    let keys = Object.keys(localStorage);
    let count = 1;
    for (let key of keys) {
        console.log(`${key}: ${localStorage.getItem(key)}`);
        document.getElementById("dataul").innerHTML += insertData(count, localStorage.getItem(key), key);
        count++;
    }
    console.log("end of loop");
}

document.addEventListener("DOMContentLoaded", function () {
    displayData();
});

let saveData = () => {
    let inputText = document.getElementById("inputText").value;
    let inputTime = document.getElementById("inputTime").value;
    localStorage.setItem(inputText, inputTime);
    location.reload();
}