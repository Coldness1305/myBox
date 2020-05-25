function validateInput() {
    var myInput = document.getElementById("myText").value;
    var myOutput = document.getElementById("myOutput");

    localStorage.setItem("data", myInput)
    if (myInput.length == 0)
        alert("Error Empty Input :c");
    myOutput.innerHTML = localStorage.getItem("data");
    return true;
}

function duration(timestamps) {
    var last = timestamps.pop();
    var durations = [];

    while (timestamps.length) {
        var newTime = timestamps.pop();
        durations.push(last - (newTime));
    }
    return durations.reverse();
}

function storeKey() {
    var array = JSON.parse().localStorage.getItem("")
}


function initTimeline() {
    var timeline = {timestamps:{}};
    localStorage.setItem("timeline", JSON.stringify(timeline));
}

function getData() {
    var times = JSON.parse(localStorage.getItem("timeline"));

    for (var t in times) {
        if (times.hasOwnProperty(t)) {
            var val = times[t];
            console.log(val);
        }
    }
}