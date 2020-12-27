console.log("test : script produit chargé");

/**
 * Test de l'objet urlsearchparam
 */
const url = "http://localhost:3000/api/teddies/";


 // Récupère les paramètres situé après [?]
 const params = new URLSearchParams(window.location.search);
const id = params.get("_id"); // récupére ce qui se situe après [id=] donc l'id

// console.log(id);



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

