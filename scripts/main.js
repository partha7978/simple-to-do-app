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
            <i class="fas fa-trash-alt" onclick="removeTask('${task}')"></i>
        </div>
    </li>`
    return temp;
}

let displayData = () => {
    document.getElementById("dataul").innerHTML = "";
    let keys = Object.keys(localStorage);
    let count = 1;
    for (let key of keys) {
        document.getElementById("dataul").innerHTML += insertData(count, localStorage.getItem(key), key);
        count++;
    }
}

displayData();

let saveData = () => {
    let inputText = document.getElementById("inputText").value;
    let inputTime = document.getElementById("inputTime").value;
    localStorage.setItem(inputText, inputTime);
    displayData();
}

let removeTask = (key) => {
    localStorage.removeItem(key.trim());
    displayData();
}