// Variable et constante
let startMinutes = 2;
let time = startMinutes * 60;

const countDownElement = document.getElementById('countdown');



// Fonction
function updateCountDown() {

    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // recupere la variable minutes
    countDownElement.innerHTML = `${minutes} : ${seconds}`;

    time--;

};

// Interval
setInterval(updateCountDown, 1000);