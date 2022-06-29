// Objet App : "module" qui gère toute l'application en appelant d'autres "modules"
const app = {

    apiRootUrl: "http://localhost:8082",
    
    
    // La méthode init est appelée par l'écouteur d'événement lorsque la page est totalement chargée.
    // On va mettre dedans tout le code à exécuter quand la page est chargée (très souvent ce sera des écouteurs d'événements)
    init: function() {
        // Dés le chargement de la page la map
        map.init();
        theme.init();

        // Autre option pour le darkmode sans passer par l'objet theme
        // const toggle = document.getElementById("toggle-mode");
        // toggle.addEventListener('change', () => {
        // document.body.classList.toggle("dark");
        // });
    }

}


// On attend le chargement complet de la  page pour lancer notre code.
document.addEventListener('DOMContentLoaded', app.init);