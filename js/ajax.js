/** REQUETE API
 * Récupère les données de l'API - nounours
 * Envoie et récupère les données de l'API
 */

 console.log("test : script Ajax chargé");


 // Récupérer les données (requête GET) 
 
 const url = "http://localhost:3000/api/teddies";
 function getAPI() {
     return fetch(url) // retourne la promesse et son objet
     .then((reponse) => reponse.json) // Retourne la réponse sous forme de json
     .catch((erreur) => {
         alert("une erreur c'est produite, merci de réessayer plur tard !")
         console.log(erreur);
     });
 }