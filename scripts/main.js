let insertData = (sn, time, task, status) => {
    let temp = `<li>
        <div class="right">
            <span class="list-number">${sn}.</span>
            <span class="time-list">${time} PM</span>
        </div>
        <div class="middle">
            <span class="main-list-content ${status ? "toggle" : ""}">${task} </span>
        </div>
        <div class="left">
            <i class="fas ${status ? "fa-redo-alt" : "fa-check"}" onclick="changeStatus('${task}')"></i>
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
        document.getElementById("dataul").innerHTML += insertData(count, JSON.parse(localStorage.getItem(key))[1], key, JSON.parse(localStorage.getItem(key))[0]);
        count++;
    }
}

displayData();

let saveData = () => {
    let inputText = document.getElementById("inputText").value;
    let inputTime = document.getElementById("inputTime").value;
    let dataArray = [false, inputTime];
    localStorage.setItem(inputText, JSON.stringify(dataArray));
    displayData();
}

let removeTask = (key) => {
    localStorage.removeItem(key.trim());
    displayData();
}

let changeStatus = (key) => {
    let item = JSON.parse(localStorage.getItem(key));
    item[0] = item[0] ? false : true;
    localStorage.setItem(key, JSON.stringify(item));
    displayData();
}