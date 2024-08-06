function updateTime(){
    let date = new Date;

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let timeKiping = "AM";
let day = date.getDay()
let dayName;

if(hour > 12){
    timeKiping = "PM";
}
else{
    timeKiping = "AM"
}

if(hour > 12){
    hour -= 12;
}

hour = hour < 10 ? "0" + hour:hour;
minute = minute < 10 ? "0" + minute : minute;
second = second < 10 ? "0" + second: second;

switch(day){
    case 0 : {
        dayName = "Sunday"
        break;
    }
    case 1 : {
        dayName = "Monday"
        break;
    }
    case 2 :{
        dayName = "Tuesday"
        break;
    }
    case 3 :{
        dayName = 'Wednesday'
        break;
    }
    case 4 :{
        dayName = 'Thursday'
        break;
    }
    case 5 : {
        dayName = 'Friday'
        break;
    }
    case 6 : {
        dayName = 'Saturday'
        break;
    }
    default :{
        dayName = 'Invalid day Number'
    }
}



document.querySelector("p").innerHTML = dayName;
document.querySelector("h2").innerText = `${hour}:${minute}:${second}   ${timeKiping}`;
document.querySelector("#timeKiping").innerText = timeKiping;


};

setInterval(updateTime,1000);

