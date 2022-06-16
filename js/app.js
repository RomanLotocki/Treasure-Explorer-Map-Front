// Objet App : "module" qui gère toute l'application en appelant d'autres "modules"
const app = {

    // La méthode init est appelée par l'écouteur d'événement lorsque la page est totalement chargée.
    // On va mettre dedans tout le code à exécuter quand la page est chargée (très souvent ce sera des écouteurs d'événements)
    init: function() {
        // Dés le chargement de la page, on génère les images du slider
        map.init();
    }
}

// On attend le chargement complet de la  page pour lancer notre code.
document.addEventListener('DOMContentLoaded', app.init);