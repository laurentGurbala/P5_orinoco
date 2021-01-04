// Crée des cartes pour chaque nounours disponible dans l'api
function genererCarte(lstNounours) {
    // Récupération de la div où l'on va insérer les cartes de nounours
    const divNounours = document.getElementById("liste-nounours");

    // Parcours la liste des nounours disponible sur l'API
    for (const item of lstNounours) {
        
        const divCol = document.createElement("div");
        divCol.classList.add("col", "mb-3");
        divNounours.append(divCol);
        
        // Crée une carte
        const carte = document.createElement("div");
        carte.classList.add("card", "h-100", "p-2");
        divCol.append(carte);

        // Image de la carte
        const carteImage = document.createElement("img");
        carteImage.classList.add( "fit-cover", "img-thumbnail", "shadow");
        carteImage.src = item.imageUrl;
        carteImage.alt = "ourson en peluche";
        carte.append(carteImage);

        // Carte body
        const carteBody = document.createElement("div");
        carteBody.classList.add("card-body");
        carte.append(carteBody);

        // Lien de la carte (vers la page produit)
        // const carteLien = document.createElement("a");
        // carteLien.classList.add("stretched-link");
        // carteLien.href = "produit.html?_id=" + item._id;
        // carteBody.append(carteLien);

        // Titre de la carte (nom du nounours)
        const carteTitre = document.createElement("h3");
        carteTitre.classList.add("card-title");
        carteTitre.textContent = item.name;
        carteBody.append(carteTitre);

        // Description de la carte
        const carteDescription = document.createElement("p");
        carteDescription.classList.add("card-text")
        carteDescription.textContent = item.description;
        carteBody.append(carteDescription);


        // Prix de la carte
        // const cartePrix = document.createElement("p");
        const cartePrix = document.createElement("a")
        cartePrix.href = "produit.html?_id=" + item._id;
        cartePrix.textContent = item.price + " €";
        // cartePrix.classList.add("card-subtitle", "bg-primary", "font-weight-bold", "text-center");
        cartePrix.classList.add("btn", "btn-primary", "stretched-link");
        carteBody.append(cartePrix);
    }
}


// Requete HTTP de type Get
fetchGet()
    .then(data => {                 // Traitement de la requete
        // console.log(data);
        genererCarte(data);
        
    }).catch(function(erreur) {

        alert("Une erreur inattendue c'est produite, merci de réessayer plus tard !")
        console.log(erreur);
    });

