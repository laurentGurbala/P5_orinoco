// URL de l'api
const urlAPI = "http://localhost:3000/api/teddies/";

// Requete Fetch : GET
function fetchGet(parametre = "") {
    // retourne le resultat du fetch
    return fetch(urlAPI + parametre)
    .then((reponse) => reponse.json()) // Retourne une réponse en format JSON
    .catch((erreur) => alert("une erreur c'est produite"))
}