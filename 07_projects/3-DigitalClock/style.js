const time = document.getElementById('time')
const date = document.getElementById('date')

setInterval(() => {
    let clock = new Date
    time.innerHTML = clock.toLocaleTimeString();
    date.innerHTML = clock.toLocaleDateString();
}, 1000);