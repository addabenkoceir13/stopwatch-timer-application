const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
const millisecondsLabel = document.getElementById("milliseconds");

const StartBtn = document.getElementById("startBtn");
const StopBtn = document.getElementById("stopBtn");
const PuseBtn = document.getElementById("pausBtn");
const ResetBtn = document.getElementById("resetBtn");

const LapList = document.getElementById("laplist");

// stopwatch variables
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

StartBtn.addEventListener('click', startTimer);
StopBtn.addEventListener('click', stopTimer);
PuseBtn.addEventListener('click', pausTimer);
ResetBtn.addEventListener('click', resetTimer);

function startTimer()
{
    interval =  setInterval(updateTimer,10);
    StartBtn.disabled = true;
    console.log("start timer");

}

function stopTimer()
{
    clearInterval(interval);
    addToLapList();
    resetTimerData();
    StartBtn.disabled = false;
}

function pausTimer()
{
    clearInterval(interval);
    StartBtn.disabled = false;
    console.log("puse time")
}

function resetTimer()
{
    clearInterval(interval);
    resetTimerData()
    StartBtn.disabled = false;

}

function updateTimer(){
    milliseconds++;
    if(milliseconds === 100){  //// 1000  -> 1 seconds = 1000 millseconds
        milliseconds = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
    }

    displayTimer();
}

function displayTimer(){
    millisecondsLabel.textContent = padTime(milliseconds);
    secondsLabel.textContent = padTime(seconds);
    minutesLabel.textContent = padTime(minutes);    
}
function padTime(time)
{
    return time.toString().padStart(2,'0');
}

function resetTimerData()
{
    seconds = 0;
    minutes = 0;
    milliseconds = 0;
    displayTimer();
}

function addToLapList()
{
    const laptime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span> Lap ${LapList.childElementCount +1}:</span> ${laptime}` ;
    LapList.appendChild(listItem);
}
