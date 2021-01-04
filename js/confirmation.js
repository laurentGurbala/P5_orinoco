// Récupération sous forme d'objet le contenu du storage
const data = JSON.parse(sessionStorage.getItem("data"));
console.log(data);

// Récupération et modification des éléments du HTML

// Numéro de commande
const orderID = document.getElementById("order-id");
orderID.textContent = data.orderId;

// Nom Prénom
const nomPrenom = document.getElementById("nom-prenom");
nomPrenom.textContent = data.contact.firstName + " " + data.contact.lastName;

// Adresse
const adresse = document.getElementById("adresse");
adresse.textContent = data.contact.address;

// ville
const ville = document.getElementById("ville");
ville.textContent = data.contact.city;

// Total
const divTotal = document.getElementById("total");
let total = 0
for (let i = 0; i < data.products.length; i++) {
    const item = data.products[i];
    total += item.price;
}
divTotal.textContent = total/100 + " €"