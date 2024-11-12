// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/
/*
DOM - PREPA 5 : « Journaux » : construire une liste de journaux
1. Stocker les urls de ces trois journaux français dans un tableau :
	- "http://lemonde.fr",
	- "http://lefigaro.fr",
	- "http://liberation.fr"

2. Ajouter la liste des journaux sur la page, dans la div d'id "contenu"
*/
/* ATTENTION : Le balisage HTML proposé dans la solution est incorrect.
Il a sans doute été simplifié à outrance dans un souci 
de rendre la génération la plus simple possible en JS.
TODO : améliorer le balisage HTML généré !!! */

const contenu = document.getElementById('contenu');

// On crée des tableaux avec des objets
const journaux = [
    { name: "Le Monde", url: "http://lemonde.fr" },
    { name: "Le Figaro", url: "http://lefigaro.fr" },
    { name: "Libération", url: "http://liberation.fr" }
];

// Créer et ajouter les éléments dynamiquement
journaux.forEach(journal => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', journal.url);
    a.textContent = journal.name; // Sans guillemets ici
    li.appendChild(a);
    contenu.appendChild(li);
});

// Lorsqu'on veut ajouter un objet dans textContent, on évite de mettre des guillemets