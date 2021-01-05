// Récupération sous forme d'objet le contenu du storage
const data = JSON.parse(localStorage.getItem("data"));
console.log(data);

// Affiche le message de confirmation de la commande
function messageConfirmationCommande(pData) {
    // Numéro de commande
    const orderID = document.getElementById("order-id");
    orderID.textContent = pData.orderId;
    
    // Nom Prénom
    const nomPrenom = document.getElementById("nom-prenom");
    nomPrenom.textContent = pData.contact.firstName + " " + pData.contact.lastName;
    
    // Adresse
    const adresse = document.getElementById("adresse");
    adresse.textContent = pData.contact.address;
    
    // ville
    const ville = document.getElementById("ville");
    ville.textContent = pData.contact.city;
    
    // Total
    const divTotal = document.getElementById("total");
    let total = 0
    for (let i = 0; i < pData.products.length; i++) {
        const item = pData.products[i];
        total += item.price;
    }
    divTotal.textContent = total/100 + " €"
}
    
messageConfirmationCommande(data);

// Suppression des data de la commande dans le local storage
localStorage.removeItem("data");