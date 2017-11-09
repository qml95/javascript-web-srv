// // Création d'une requête HTTP
// var req = new XMLHttpRequest();
// // Requête HTTP GET synchrone vers le fichier langages.txt publié localement
// req.open("GET", "http://localhost:8888/javascript-web-srv/data/langages.txt", false);
// // Envoi de la requête
// req.send(null);
// // Affiche la réponse reçue pour la requête
// console.log(req.responseText);

var req = new XMLHttpRequest();
// La requête est asynchrone lorsque le 3ème paramètre vaut true ou est absent
req.open("GET", "http://localhost:8888/javascript-web-srv/data/langages.txt");
// Gestion de l'événement indiquant la fin de la requête
req.addEventListener("load", function () {
    // Affiche la réponse reçue pour la requête
    console.log(req.responseText);
});
req.send(null);
