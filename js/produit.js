// Récupère les paramètres situé après [?]
const params = new URLSearchParams(window.location.search);
const id = params.get("_id");

// Fonction qui permet de remplacer le template par les bonne valeurs de l'api
function remplaceLeTemplate(nounours) {
    // Remplace l'image
    const imageNounours = document.getElementById("image-nounours");
    imageNounours.src = nounours.imageUrl;

    // Remplace le nom
    const nomNounours = document.getElementById("nom-nounours");
    nomNounours.textContent = nounours.name;

    // Remplace la description
    const descriptionNounours = document.getElementById("description-nounours");
    descriptionNounours.textContent = nounours.description;

    // Incrémente les options de couleur
    const couleurNounours = document.getElementById("couleur");

    // Parcours les couleurs disponibles dans l'api et les ajoutes dans les options
    for(let i = 0; i <= nounours.colors.length; i++) {
        let couleurOption = document.createElement("option");
        couleurOption.textContent = nounours.colors[i];
        couleurNounours.append(couleurOption);
        
        // Par défaut, choisie la première couleur disponible
        if(i == 0) {
            couleurNounours.value = couleurOption;
        }
    }

    // Remplace le prix
    const prixNounours = document.getElementById("prix-nounours");
    prixNounours.textContent = nounours.price/100 + " €";
}

// Ajouter le produit au localStorage
function ajoutProduitDansLocalStorage(produit) {
    
    // Cibler le bouton "ajout au panier"
    const btnPanier = document.getElementById("btn-panier")
    
    // Evenement lier au bouton => lors du click
    btnPanier.addEventListener("click", (event) => {
        // Supprimer le comportement par défaut d'un bouton
        event.preventDefault();

        // Sauvegarder l'option choisie
        const couleurNounours = document.getElementById("couleur")
        const couleurChoisie = couleurNounours.value;
        
        /**
         *  Récupération dans le local storage la valeur de la clé "panier-nounours".
         *  Celui-ci est parsé en objet JS
         */
        let contenuStorage = localStorage.getItem("panier-nounours");
        contenuStorage = JSON.parse(contenuStorage);

        // Si le local storage ne contenait pas encore de "panier-nounours",
        // Création du tableau que contiendra "panier-nounours"
        let commande = contenuStorage;
        if(commande === null) {
            commande = [];
        }

        // Création d'un objet litéral "produit" pour la commande
        let objetNounours = {
            nom: produit.name,
            id: produit._id,
            couleur: couleurChoisie,
            prix: produit.price/100,
            image: produit.imageUrl
        };

        // Ajoute le produit au tableau de commande
        commande.push(objetNounours);

        // Le tableau de commande contient des OBJETS nounours,
        // pour les stocker dans le storage, on doit les convertir en "string lineaire",
        // et ajout dans le local storage.
        let conversion = JSON.stringify(commande);
        localStorage.setItem("panier-nounours", conversion);

        // Informe le client que sont produit à été ajouté à son panier.
        alert(produit.name + " ajouté au panier");
    });
}

// récupération de l'api d'un seul nounours
fetchGet(id)
    .then(data => {                  // Traitement de la requête
        // console.log(data);        // data => objet d'un seul nounours
        remplaceLeTemplate(data);    // Mise à jour des informations du template       
        
        ajoutProduitDansLocalStorage(data);
        
    }).catch(function(erreur) {

        alert("Une erreur inattendue c'est produite, merci de réessayer plus tard !");
        console.log(erreur);
    });
    