console.log("test : script panier chargé");

// Variables
const divPanier = document.getElementById("div-panier");
const divTotal = document.getElementById("div-total");

let total = 0;

// Les fonctions

/**
 * Affichage du message "votre panier est vide"
 * si le sessionStorage est vide.
 */
function messagePanierVide() {
    const message = document.createElement("p");    // Création d'un élément HTML <p>
    message.classList.add("h3", "text-center");     // Ajout des classes     
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
    btnSuppr.classList.add("btn", "btn-supprime");
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

// <<<<<<<<<<<<<<<<<<       APLI            >>>>>>>>>>>>>>>>>>>>>

// Récupération et convertion du contenu du sessionStorage (en obj)
const panier = JSON.parse(sessionStorage.getItem("panier-nounours"));

// Message affiché si le panier est vide
if(panier === null) {
    messagePanierVide();
}
// Création du contenue du session storage dans le panier
else {
    for (const item of panier) {

        creerContenuPanier(item);
        total += item.prix;
        divTotal.textContent = total + " €"
    }
}

// Supprime un article du panier
// Tous les boutons supprimer de la page
const lstBtnSupprime = document.getElementsByClassName("btn-supprime");

if(panier != null) {

    for (let i = 0; i < panier.length; i++) {
        lstBtnSupprime[i].addEventListener("click", (event) => {
            event.preventDefault();
            // Supprime l'objet du panier
            panier.splice(i, 1);
            
            // Converti les objets en string linéaire pour le storage
            let conversionJson = JSON.stringify(panier);
            // Mise à jour du session storage
            sessionStorage.setItem("panier-nounours", conversionJson);
            
            // Supprime l'article de la page HTML
            lstBtnSupprime[i].parentElement.remove();
            
            // Vérification du panier vide
            if (panier.length === 0) {
                sessionStorage.removeItem("panier-nounours");
                console.log(panier);
            }
            
            /**
             * Pour éviter que le [i] ne s'actualise pas après une suppression,
             * pouvant créer un bug, on actualise la page, relançant la boucle,
             * ce qui redéfinie le [i]
             */
            window.location.href = "panier.html";
        })
    }
}
