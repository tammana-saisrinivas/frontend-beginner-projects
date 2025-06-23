let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;

document.getElementById("start").addEventListener("click", startWatch);
document.getElementById("pause").addEventListener("click", pauseWatch);
document.getElementById("reset").addEventListener("click", resetWatch);

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.innerText = `${h}:${m}:${s}`;
}

function startWatch() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

function pauseWatch() {
    clearInterval(timer);
}

function resetWatch() {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    display.innerText = "00:00:00";
}
