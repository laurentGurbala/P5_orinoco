const div = document.getElementById("liste-nounours");

// Requete HTTP de type Get
fetch("http://localhost:3000/api/teddies")
    .then(reponse => reponse.json()) // Retourne une réponse en format json
    .then(data => {
        // TODO : traitement de la réponse
        for (const item of data) {
            console.log(item);
            // Créer une carte
            // Création de la première div avec la classe col-12
            const eltCol = document.createElement("div");
            eltCol.setAttribute("class", "col-12 col-lg-6 mb-3");

            // Crée la div "carte shadow"
            const eltCarte = document.createElement("div");
            eltCarte.setAttribute("class", "card shadow card-body");
            
            // Crée le titre de la carte
            const eltTitre = document.createElement("h3");
            eltTitre.textContent = item.name;
            eltTitre.setAttribute("class", "card-title")

            // Crée le link
            const eltLink = document.createElement("a");
            eltLink.setAttribute("href", "produit.html?id=")

            // Crée l'image de la carte
            const eltImage = document.createElement("img");
            eltImage.setAttribute("src", item.imageUrl);
            eltImage.setAttribute("class", "w-100");
            
            // Crée la description de la carte
            const eltDescription = document.createElement("p");
            eltDescription.setAttribute("class", "card-text");
            eltDescription.textContent = item.description;

            // Crée le choix de la couleur

            // Crée le prix
            const eltPrix = document.createElement("p");
            eltPrix.setAttribute("class", "card-subtitle");
            eltPrix.textContent = item.price + " €";

            // Ajout des éléments
            div.append(eltCol);                 // élément principal
            eltCol.append(eltCarte);            // élément carte
            eltCarte.append(eltTitre);          // élément titre de la carte
            eltCarte.append(eltImage);          // élément image de la carte
            eltCarte.append(eltDescription);    // élément description de la carte
            eltCarte.append(eltPrix);           // élément prix de la carte
        }
    }).catch(function(erreur) {
        alert("Une erreur inattendue c'est produite, merci de réessayer plus tard !")
    });

