console.log("OK");

const map = {

    // Méthode contenant les instructions pour l'affichage initiale de la map
    init: function(){
        
        //Création de la map
        var map = L.map('map').setView([18.045124, -63.019916], 5);

        //Définition du layer
        var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
        });

        //Ajout du layer à la map
        tileLayer.addTo(map);

    }

}