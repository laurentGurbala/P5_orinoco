console.log("test : script produit chargé");

/**
 * Test de l'objet urlsearchparam
 */
const url = "http://localhost:3000/api/teddies/";


 // Récupère les paramètres situé après [?]
 const params = new URLSearchParams(window.location.search);
const id = params.get("_id"); // récupére ce qui se situe après [id=] donc l'id

// console.log(id);

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
    for(let i = 0; i < nounours.colors.length; i++) {
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
    prixNounours.textContent = nounours.price + " €";
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
        // console.log(couleurNounours.value) // => valeur de la couleur choisie
        
        // <<<<<< Récupération dans le sessionStorage les données de tout le json >>>>>>>>
        // console.log(produit) // => json du produit seul
        // let produitJson = JSON.stringify(produit); 
        // => Stocke tout le contenue du json en string linear
        
        // TODO : supprimer le doublon de création d'objet et supprimer la première méthode

        // <<<<<< Créer un objet avec uniquement les infos qui nous interresse >>>>>>>>
        // let objetNounours = {
        //     nom: produit.name,
        //     id: produit._id,
        //     couleur: couleurChoisie,
        //     prix: produit.price
        // };

        // console.log(objetNounours); // => Affiche bien l'objet créer "objetNounours"
        
        // Récupération du contenue du sessionStorage
        let contenuStorage = sessionStorage.getItem("panier-nounours");
        // Convertion en objet js
        contenuStorage = JSON.parse(contenuStorage);

        // Stocker les objets dans un tableau
        let commande = contenuStorage;
        if(commande === null) {
            commande = [];
        }

        // Création d'un objet "produit" pour la commande
        let objetNounours = {
            nom: produit.name,
            id: produit._id,
            couleur: couleurChoisie,
            prix: produit.price,
            image: produit.imageUrl
        };

        // Ajoute le produit au tableau de commande
        commande.push(objetNounours);

        /**
         * Le tableau de commande contient des OBJETS nounours.
         * Pour les stocker dans le storage, on doit les convertir en "string lineaire"
        */

        // Convertion du tableau en lineaire et ajout dans le local storage
        let conversion = JSON.stringify(commande);
        sessionStorage.setItem("panier-nounours", conversion);

        alert(produit.name + " ajouté au panier")
    });
}

// récupération de l'api d'un seul nounours
fetch(url + id)
    .then(reponse => reponse.json()) // Demande une réponse en format json
    .then(data => {                  // Récupération des données

        // console.log(data);
        remplaceLeTemplate(data);    // Mise à jour des informations du template       
        
        ajoutProduitDansLocalStorage(data);
        
    }).catch(function(erreur) {

        alert("Une erreur inattendue c'est produite, merci de réessayer plus tard !");
        console.log(erreur);
    });

