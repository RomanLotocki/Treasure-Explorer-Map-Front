const theme = {

    // Méthode contenant les instructions initiales pour la gestions des thèmes
    init: function(){
        const toggle = document.getElementById("toggle-mode");
        toggle.addEventListener('click', theme.handleToggle);

        // Si aucune source img n'est définie dans le html on peut déclarer les images qui chargeront à l'arrivée sur la page dans la fonction init.
        // document.querySelector('.logo1').src="./img/github-light.png";
        // document.querySelector('.logo2').src="./img/linkedin-light.jpg";
    },

    handleToggle: function(){
        
        document.body.classList.toggle("dark")
        // Version en 2 temps
        // const bodyElement = document.body;
        // bodyElement.classList.toggle("dark");

        // Changement d'images en fonction du thème appliqué
        if(document.body.classList.contains('dark') == true) {
            document.querySelector('.logo1').src="./img/github-dark.png";
            document.querySelector('.logo2').src="./img/linkedin-dark.png";
        } else {
            document.querySelector('.logo1').src="./img/github-light.png";
            document.querySelector('.logo2').src="./img/linkedin-light.jpg";
        }

        
    }
    }