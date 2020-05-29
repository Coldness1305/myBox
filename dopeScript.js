var timeline = {
    times: [],
    keys: [],
    durations: []
};

var myInput = document.getElementById("myText");

var myOutput = document.getElementById("myConsole");

function duration() {
    for (var i = 1; i < timeline.times.length; i++) {
        timeline.durations[i - 1] = timeline.times[i] -timeline.times[i - 1];
    }
}

function start_record() {
    myInput.addEventListener('input', (e) => {
        timeline.times.push(Date.now());
        timeline.keys.push(e.data);
    });
}

function stop_record() {
    myInput.removeEventListener('input', (e) => {
        timeline.times.push(Date.now());
        timeline.keys.push(e.data);
    });
    duration();
    localStorage.setItem('timeline', JSON.stringify(timeline));
}

function write(key) {
    myInput.value += key;
}

function myLoop(i, data) {
    setTimeout(function () {
        myInput.value += data.keys[i];
        i++;
        if (i < data.keys.length)
            myLoop(i, data);
    }, data.durations[i - 1]);
}

function reprint() {
    var data = JSON.parse(localStorage.getItem('timeline'));
    if (data.keys.length == 0) {
        alert("Please Record and Save before replaying.");
        return;
    }
    myInput.value = "";
    write(data.keys[0]);
    myLoop(1, data);
}
