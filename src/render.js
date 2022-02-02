import { DateTime } from 'luxon';

const resultLabel = document.getElementById("result");
const calculateBtn = document.getElementById("calculate-btn");
const inputWorkHours = document.getElementById("workday-length");
const inputAlreadyWorkedHours = document.getElementById("already-worked-hours");
const inputWorkedMinutes = document.getElementById("already-worked-minutes");
const inputLunchbreakLength = document.getElementById("lunchbreak-length");
const inputLunchbreakDone = document.getElementById("lunchbreak-done")

function displayResult(resultHours, resultMinutes) {
    const displayString = resultHours + "h " + resultMinutes + "min";
    resultLabel.innerText = displayString;
}

function calculateWorkRemaining() {
    const now = new Date();
    const workdayLength = inputWorkHours.value;
    const alreadyWorkedHours = inputAlreadyWorkedHours.value;
    const alreadyWorkedMinutes = inputWorkedMinutes.value;
    const lunchbreakLength = inputLunchbreakLength.value;
    const lunchbreakDone = inputLunchbreakDone.value;

    const minutesInAnHour = 60;
    const remaining = workdayLength - (alreadyWorkedHours + alreadyWorkedMinutes / minutesInAnHour);
    if (!lunchbreakDone) {
        remaining -= lunchbreakLength;
    }
    
    const startingTime = DateTime.local().plus({ hours: alreadyWorkedHours, minutes: alreadyWorkedMinutes });
    const endingTime = DateTime.local(startingTime).plus({ hours: , minutes:  })


}

export { calculateWorkRemaining }