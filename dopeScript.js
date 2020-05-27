var timeline = {
    times: [],
    keys: [],
    durations: []
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

function duration() {
    for (var i = 1; i < timeline.times.length; i++) {
        timeline.durations[i - 1] = timeline.times[i] -timeline.times[i - 1];
    }
}

function save() {
    localStorage.setItem(timeline, JSON.stringify(timeline));
}

function write(key) {
    myInput.value += key;
}

function myLoop(i) {
    setTimeout(function () {
        myInput.value += timeline.keys[i];
        i++;
        if (i < timeline.keys.length)
            myLoop(i);
    }, timeline.durations[i - 1]);
}

function reprint() {
    myInput.value = "";
    if (timeline.keys.length == 0)
        return;
    duration();
    console.log(timeline);
    write(timeline.keys[0]);
    myLoop(1);
    
}
