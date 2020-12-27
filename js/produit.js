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
    }

    // Remplace le prix
    const prixNounours = document.getElementById("prix-nounours");
    prixNounours.textContent = nounours.price + " €";
}

// Ajouter le produit au localStorage
function ajoutProduitDansLocalStorage(produit) {
    
}

// récupération de l'api d'un nounours
fetch(url + id)
    .then(reponse => reponse.json()) // Demande une réponse en format json
    .then(data => {                  // Récupération des données

        // console.log(data);
        remplaceLeTemplate(data);    // Mise à jour des informations du template       
        
    }).catch(function(erreur) {

        alert("Une erreur inattendue c'est produite, merci de réessayer plus tard !")
        console.log(erreur);
    });

