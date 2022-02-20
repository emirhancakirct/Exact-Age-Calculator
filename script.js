let input = document.querySelector('#birthday');
let loading = document.getElementById("loading");

input.addEventListener("change", calculate = () =>{
    
    let years = document.getElementById("years");
    let months = document.getElementById("months");
    let days = document.getElementById("days");
    let hours = document.getElementById("hours");
    let minutes  = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    let date = input.value;
    let dateEnter = new Date(date);
    
    let secondEnter = dateEnter.getSeconds(); 
    let minuteEnter = dateEnter.getMinutes();
    let hourEnter = dateEnter.getHours(); 
    let dayEnter = dateEnter.getDate(); 
    let monthEnter = dateEnter.getMonth(); 
    let yearEnter = dateEnter.getFullYear(); 
    
    let currentSecond = new Date().getSeconds();
    let currentMinute = new Date().getMinutes();
    let currentHour = new Date().getHours();
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    
    let year = currentYear - yearEnter;
    let month = currentMonth - monthEnter;
    let day = currentDay - dayEnter;
    let hour = currentHour - hourEnter;
    let minute = currentMinute - minuteEnter;
    let second = currentSecond - secondEnter;



    while(second < 0){
        second += 60;
        minute--;  
    }

    while(minute < 0){
        minute += 60;
        hour--;
    }

    while(hour < 0){
        hour += 24;
        day--;
    }

    while(day < 0){
        if(currentMonth == 0 && currentMonth == 2 && currentMonth == 4 && currentMonth == 6 &&
            currentMonth == 7 && currentMonth == 9 && currentMonth == 11){
                day += 31;
            }
            else if(currentMonth == 1){
                day += 28;
            }
            else{
                day += 30;
            }
            month--;
    }

    while(month < 0){
        month += 12;
        year--;
    }


    
    years.innerText      = year;
    months.innerText     = month;
    days.innerText       = day;
    hours.innerText      = hour;
    minutes.innerText    = minute;
    seconds.innerText    = second;
    
    setInterval(calculate, 1000);
});
let cancelLoading = () => loading.style.visibility = "hidden";
setTimeout(cancelLoading, 3000);

