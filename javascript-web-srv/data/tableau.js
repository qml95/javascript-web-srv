ajaxGet("http://localhost:8888/javascript-web-srv/data/tableaux.json", function (reponse) {
      var tableaux = JSON.parse(reponse);
      var tableauxElt = document.getElementById("tableaux");
        tableaux.forEach(function (tableau) {
          // Crée une ligne de tableau HTML pour chaque tableau
            var ligneElt = document.createElement("tr");
            ligneElt.innerHTML = "<td>" + tableau.nom + "</td><td>" + tableau.annee + "</td><td>" + tableau.auteur
             + "</td>";
            tableauxElt.appendChild(ligneElt);



    });
});
