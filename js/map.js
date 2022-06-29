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

        
        //?----------------CREATION DYNAMIQUE DES MARQUEURS---------------------
        
        //!tableau de données pour test
        // let items = [
        //     {title : 'Todai-Ji', description : 'Le Todai-ji est un temple bouddhique situé à Nara, sur l\'île principale de Honshu. Ce grand temple de l\'est abrite notamment le bâtiment Daibutsu-den, connue pour être la plus grande construction en bois du monde et hébergeant un monumental Grand Bouddha assis en bronze.', image : './img/todai-ji_min.jpg', latitude : 34.689037, longitude : 135.840171},

        //     {title : 'Temple d\'Artémis', description : 'Le temple d\'Artémis à Éphèse ou l\'Artemision d\'Éphèse est dans l\'Antiquité l\'un des plus importants sanctuaires d\'Artémis, déesse grecque de la chasse et de la nature sauvage. Il était considéré dans l\'Antiquité comme la quatrième des Sept Merveilles du monde.', image : './img/artemis_min.jpg', latitude : 37.959424, longitude : 27.363644},

        //     {title : 'Machu Pichu', description : "Machu Picchu (du quechua machu pikchu, littéralement « vieille montagne » ou « vieux sommet »)est une ancienne cité inca du XVe siècle au Pérou, perchée sur un promontoire rocheux qui unit les monts Machu Picchu et Huayna Picchu (« le Jeune Pic » en quechua) sur le versant oriental des Andes centrales. Son nom aurait été Pikchu ou Picho.", image : './img/machu-picchu_min.jpg', latitude : -13.163464, longitude : -72.545138}
        // ];

        //! Boucle pour afficher les données du tableau de test
        // for(let item of items){
        // var marker = L.marker([item.latitude, item.longitude]);
        // marker.addTo(map).bindPopup("<div class='popupMap'><h1>"+item.title+"</h1><p>"+item.description+"</p><img src='"+item.image+"' alt='"+item.title+"'></div>")
        // };

        //! --------------------CREATION DES MARQUEURS EN UTILISANT L'API------------------------
        
        //Options de configuration pour les données à récupérer
        let config = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
          };
          
          // On déclenche la requête HTTP avec la méthode fetch()
            fetch(app.apiRootUrl + "/api/item", config)
            .then(response => response.json())
            .then(data => {for(let item of data){
                var marker = L.marker([item.item_latitude, item.item_longitude]);
                marker.addTo(map).bindPopup("<div class='popupMap'><h1>"+item.item_name+"</h1><p>"+item.item_description+"</p></div>")
                };});
            
            
            fetch(app.apiRootUrl + "/api/site", config)
            .then(response => response.json())
            .then(data => {for(let site of data){
                var marker = L.marker([site.site_latitude, site.site_longitude]);
                marker.addTo(map).bindPopup("<div class='popupMap'><h1>"+site.name+"</h1><p>"+site.site_description+"</p></div>")
                };});  
    },


    

}