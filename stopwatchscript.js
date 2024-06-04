// Initialize variables
let timer;
let startTime;
let elapsedTime = 0;
const display = document.getElementById('time');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapTimesList = document.getElementById('lap-times');

// Event listeners
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Start the stopwatch
function startTimer() {
    if (!timer) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 1000);
    }
}

// Pause the stopwatch
function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

// Reset the stopwatch
function resetTimer() {
    clearInterval(timer);
    timer = null;
    elapsedTime = 0;
    display.textContent = '00:00';
    lapTimesList.innerHTML = '';
}

// Update the time display
function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    display.textContent = formattedTime;
}

// Format time in MM:SS format
function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Record lap time
function recordLapTime() {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapTimesList.appendChild(lapItem);
}
