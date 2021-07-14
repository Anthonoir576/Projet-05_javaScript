// Fonction
function getInputValue() {
    // on recupere le choix utilisateur
    let choixUtilisateur = document.getElementById('choice').value;

    if (isNaN(choixUtilisateur)) {

        alert('Ceci n\'est pas un nombre !')

    } else {

        let startMinutes = choixUtilisateur;
        this.choice.value = ('');

        // Variable et constante
        let time = startMinutes * 60;

        const countDownElement = document.getElementById('countdown');

        // Interval
        setInterval(updateCountDown, 1000);

        function updateCountDown() {

            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
        
            // condition en ternaire, pour rajouté un zero, au chiffre inférieur a dix
            seconds = seconds < 10 ? '0' + seconds : seconds;
            minutes = minutes < 10 ? '0' + minutes : minutes;
        
            // recupere la variable minutes
            countDownElement.innerHTML = `${minutes} : ${seconds}`;
        
            // afin de pas ce retrouver avec des moins 10 ond donne une condition, si le chiffre et superieur a 0 alors on enleve 1, sinon cest que le compte a rebour et fini, et on l'annonce
            if(time > 0) {
        
                // Enleve des seconds, relié a l'interval, ou chaque second cette fonction se lance, et en enleve une
                time--;
        
            } else {
        
                countDownElement.innerHTML = ` C'EST FINI !`;
        
            };
        
        };

    };

};






