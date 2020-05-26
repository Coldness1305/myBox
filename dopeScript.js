

window.onload=function() {
    initTimeline();
    var myInput = document.getElementById("myText");
    var myOutput = document.getElementById("myConsole");

    function logMessage(message) {
        let p = document.createElement('p');
        p.appendChild(document.createTextNode(message));
        myOutput.appendChild(p);
    }

    function addTime(key) {
        var myTimeline = JSON.parse(localStorage.getItem("timeline"));
        myTimeline += (key, Date.now());
        logMessage("Stored " + key + " with stamp ~" + Date.now());
        localStorage.setItem("timeline", JSON.stringify(myTimeline));
    }

    myInput.addEventListener('input', (e) => {
        // logMessage(`input event. you have just inputed "${e.data}"`);
        addTime(e.data);
    });
}

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


function initTimeline() {
    var timeline = {timestamps:{}};
    localStorage.setItem("timeline", JSON.stringify(timeline));
}

function getData() {
    var times = JSON.parse(localStorage.getItem("timeline"));
    for (var t in times) {
        if (times.hasOwnProperty(t)) {
            var val = times[t];
            // console.log(val);
        }
    }
}
