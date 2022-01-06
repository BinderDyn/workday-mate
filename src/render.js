const resultLabel = document.getElementById("result");
const calculateBtn = document.getElementById("calculate-btn");
const inputWorkHours = document.getElementById("workday-length");
const inputAlreadyWorkedHours = document.getElementById("already-worked-hours");
const inputWorkedMinutes = document.getElementById("already-worked-minutes");
const inputLunchbreakLength = document.getElementById("lunchbreak-length");
const inputLunchbreakDone = document.getElementById("")

// document.addEventListener("click", calculateBtn)


function displayResult(resultHours, resultMinutes) {
    const displayString = resultHours + "h " + resultMinutes + "min";
    resultLabel.innerText = displayString;
}


export function calculateWorkRemaining() {
    const workdayLength = inputWorkHours.value;
    const alreadyWorkedHours = inputAlreadyWorkedHours.value;
    const alreadyWorkedMinutes = inputWorkedMinutes.value;
    const lunchbreakLength = inputLunchbreakLength.value;
    const lunchbreakDone = inputLunchbreakDone.value;


}