var timeline = {
    times: [],
    keys: []
};

var myInput = document.getElementById("myText");

var myOutput = document.getElementById("myConsole");

myInput.addEventListener('input', (e) => {
    timeline.times.push(Date.now());
    timeline.keys.push(e.data);
});

function logMessage(message) {
    let p = document.createElement('p');
    p.appendChild(document.createTextNode(message));
    myOutput.appendChild(p);
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

function save() {
    localStorage.setItem(timeline, JSON.stringify(timeline));
}
function reprint() {
    var durations = duration(timeline.times);
    var i = 0;
    console.log(timeline.keys[i++]);
    for (; i < timeline.keys.length; i++) {
        console.log(timeline.keys[i]);
        // var x = timeline.keys[i];
        setTimeout(console.log, 1000, i);
        // setTimeout(call(), 3000);
        // logMessage(durations[i]);
        // setTimeout(durations[i], myInput.value += timeline.keys[i]);

    }
}
