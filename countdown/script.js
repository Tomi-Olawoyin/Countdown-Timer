const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minEl = document.getElementById('mins')
const secondEl = document.getElementById('seconds')




const newYears = '17 Jan 2023'

function countdown(){
    const newYearDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = new Date(newYearDate-currentDate) / 1000;
    const days =Math.floor(totalSeconds/3600 /24)
    const hours = Math.floor(totalSeconds/ 3600) % 24
    const mins = Math.floor(totalSeconds/60)  % 60
    const seconds = Math.floor(totalSeconds) % 60
    daysEl.innerHTML = formatTime(days)
    hoursEl.innerHTML = formatTime(hours)
    minEl.innerHTML = formatTime(mins)
    secondEl.innerHTML = formatTime(seconds)
}

const  formatTime =(time) =>{
     return time < 10 ? (`0${time}`) : time;
}

//initial call
countdown()
//setInterval calls a fucntion for every 1 seconds. 
// and the second parameter is in milliseconds. 1000milliseconds = 1seconds

setInterval(countdown, 1000)