const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate(){
    //get date
    const now = new Date();

    //get seconds
    const seconds = now.getSeconds();
    //seconds hand angle
    const secondsDegrees = ((seconds / 60) * 360 + 90); //to get the seconds hand angle in degrees
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minute = now.getMinutes();
    const minuteDegrees = ((minute / 60) * 360 + 90); //to get the minute hand angle in degrees
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    //get hours
    const hours = now.getHours();
    //hours hand angle
    const hoursDegrees = ((hours / 12) * 360 + 90); //to get the hours hand angle in degrees
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
    
}

setInterval(setDate,1000)