// 02-DOM : PARCOUREZ LE DOM
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
 DOM - PREPA 2 : « Rêve » : compter les éléments.
 Déclarez la fonction compterElements afin que le reste du programme fonctionne correctement.
*/

// Insérez votre code ici

function compterElements(selecteur) {
    const elements = document.querySelectorAll(selecteur);
    return elements.length;
}
// Cette fonction sert à afficher les éléments qu'on souhaite grâce aux consoles log qu'on écrit après

console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2

