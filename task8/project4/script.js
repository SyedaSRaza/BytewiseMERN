const startStopBtn = document.querySelector('#start-stop');
const resetBtn = document.querySelector('#reset');

let sec = 0;
let min = 0;
let hrs = 0;

let leadingSec = 0;
let leadingMin = 0;
let leadingHrs = 0;

let timeInterval = null;
let timeStatus = "stopped";

function stopWatch() {

    sec++

    if (sec / 60 === 1) {
        sec = 0;
        min++;

        if (min / 60 === 1) {
            min = 0;
            hrs++;
        }
    }
    if (sec < 10) {
        leadingSec = "0" + sec.toString();
    }
    else {
        leadingSec = sec;
    }
    if (min < 10) {
        leadingMin = "0" + min.toString();
    }
    else {
        leadingMin = min;
    }
    if (hrs < 10) {
        leadingHrs = "0" + hrs.toString();
    }
    else {
        leadingHrs = hrs;
    }


    let displayTime = document.getElementById('timer').innerText = leadingHrs + ":" + leadingMin + ":" + leadingSec;

}


startStopBtn.addEventListener('click', function () {
    if (timeStatus === "stopped") {
        timeInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('start-stop').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timeStatus = 'started';
    }
    else {
        window.clearInterval(timeInterval);
        document.getElementById('start-stop').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timeStatus = 'stopped';
    }
});

resetBtn.addEventListener('click', function () {
    window.clearInterval(timeInterval);
    sec = 0;
    min = 0;
    hrs = 0;
    document.getElementById('timer').innerHTML = "00:00:00";
})