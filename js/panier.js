console.log("test : script panier chargé");

// Variables
const divPanier = document.getElementById("div-panier");

// Les fonctions

/**
 * Affichage du message "votre panier est vide"
 * si le sessionStorage est vide.
 */
function messagePanierVide() {
    const message = document.createElement("p");    // Création d'un élément HTML <p>
    message.classList.add("h3", "text-center", "col");     // Ajout des classes     
    message.textContent = "Votre panier est vide";  // Ajout du contenu
    divPanier.append(message);                      // Ajout de l'élément à la page HTML
}

/**
 * Créer le contenu du panier pour un nounours
 */
function creerContenuPanier(objet) {
    
    // Création de la ligne bootstrap
    const row = document.createElement("div");
    row.classList.add("row", "p-3", "mb-5", "align-items-center");
    row.setAttribute("style", "height: 100px");

    // Création des infos

    // --- Image du nounours ---
    const objetImage = document.createElement("img");
    objetImage.classList.add("col-2", "img-fluid");
    objetImage.src = objet.image;
    objetImage.alt = "ourson en peluche";

    // --- Nom du nounours ---
    const objetNom = document.createElement("div");
    objetNom.classList.add("col-3");
    objetNom.innerHTML = objet.nom;
    
    // --- Couleur du nounours ---
    const objetCouleur = document.createElement("div");
    objetCouleur.classList.add("col-3");
    objetCouleur.innerHTML = objet.couleur;

    // --- Prix du nounours ---
    const objetPrix = document.createElement("div");
    objetPrix.classList.add("col-3");
    objetPrix.innerHTML = objet.prix;

    // --- btn supprime du nounours ---
    const btnSuppr = document.createElement("button");
    btnSuppr.classList.add("btn");
    btnSuppr.innerHTML = '<i class="far fa-trash-alt"></i>';

    // Ajout des containeurs
    row.append(objetImage);
    row.append(objetNom);
    row.append(objetCouleur);
    row.append(objetPrix);
    row.append(btnSuppr);

    divPanier.append(row);

}

// Suppression d'un produit du panier
function supprimeProduitDuPanier() {

}

// Récupération et convertion du contenu du sessionStorage (en obj)
const panier = JSON.parse(sessionStorage.getItem("panier-nounours"));
console.log(panier);

if(panier === null) {
    messagePanierVide();
}else {
    for (const item of panier) {
        console.log(item.nom);
        creerContenuPanier(item);
    }
}

// La requête HTTP
