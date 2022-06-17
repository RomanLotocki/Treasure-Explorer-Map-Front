console.log("OK");

const map = {

    // Méthode contenant les instructions pour l'affichage initiale de la map
    init: function(){
        
        //Création de la map
        var map = L.map('map').setView([18.045124, -63.019916], 3);

        //Définition du layer
        var mainLayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
	        maxZoom: 20,
            minZoom: 1,
	        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            });
        
        //Ajout du layer à la map
        mainLayer.addTo(map);

        var satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            maxZoom: 20,
            minZoom: 1,
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            });

        L.control.layers({
            'par défaut': mainLayer,
            'satellite': satelliteLayer
        }).addTo(map);

        //tableau de test
        let items = [
            {title : 'Todai-Ji', description : 'Le Todai-ji est un temple bouddhique situé à Nara, sur l\'île principale de Honshu. Ce grand temple de l\'est abrite notamment le bâtiment Daibutsu-den, connue pour être la plus grande construction en bois du monde et hébergeant un monumental Grand Bouddha assis en bronze.', image : './img/todai-ji-min.jpg', latitude : 34.689037, longitude : 135.840171},
            {title : 'Saint Graal', description : 'Coupe ultime pour déguster un bon petit Chianti', image : './img/todai-ji-min.jpg', latitude : 38.665280, longitude : 27.399070}
        ];

        //Création dynamique des marqueurs
        for(let item of items){
        var marker = L.marker([item.latitude, item.longitude]);
        marker.addTo(map).bindPopup("<div class='popupMap'><h1>"+item.title+"</h1><p>"+item.description+"</p><img src='"+item.image+"' alt='"+item.title+"'></div>")
        };
 
    }

}