const theme = {

    // Méthode contenant les instructions initiales pour la gestions des thèmes
    init: function(){
        const toggle = document.getElementById("toggle-mode");
        toggle.addEventListener('click', theme.handleToggle);
    },

    handleToggle: function(){
        
        document.body.classList.toggle("dark")
        
        // Version en 2 temps
        // const bodyElement = document.body;
        // bodyElement.classList.toggle("dark");
    }
    }