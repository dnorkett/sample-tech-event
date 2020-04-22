const textElement = document.querySelector('#timeLeft');
const conferenceDate = new Date('October 27, 2020 00:00:00');

const updateTimeLeft = () => {
    let currentDate = new Date();
    let timeRemaining = conferenceDate.getTime() - currentDate.getTime()   

    let daysLeft = Math.floor(timeRemaining / 86400000);
    let hoursLeft = Math.floor((timeRemaining - (daysLeft * 86400000))/ 3600000);
    let minutesLeft = Math.floor((timeRemaining - (daysLeft * 86400000) - (hoursLeft * 3600000)) / 60000);
    let secondsLeft = Math.floor((timeRemaining - (daysLeft * 86400000) - (hoursLeft * 3600000) - (minutesLeft * 60000)) / 1000);
    
    if (timeRemaining > 0) {
        textElement.textContent = `Time Remaining: ${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
    } else {
        textElement.textContent = `Conference is either in progress or over.`;
    }    
}

updateTimeLeft();
setInterval(updateTimeLeft, 1000);