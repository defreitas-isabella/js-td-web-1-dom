/*exercice 1.1*/

console.log(document.head);
console.log(document.body);
console.log(document.title);

/*exercice 1.2*/

const bodyBalise = document.body;

if (bodyBalise.nodeType === Node.ELEMENT_NODE) {
    console.log("body est un noeud élément")
} else {
    console.log("body est un noeud textuel");
}

/*exerice 1.3*/

//Afficher

const firstChild = document.body.children[0]; // On compte toujours à partir de 0, le 0 désigne le premier
console.log(firstChild);

// Afficher

const secondChild = document.body.children[1];
console.log(secondChild);

// Dans une boucle for

const childrenBody = document.body.children; // Si on précise par entre [] ça veut dire qu'on prend un ensemble

for (let i = 0; i < childrenBody.length; i++) {
    console.log(childrenBody[i]);
}

/*exercice 4*/

const h1Element = document.querySelector("h1");
console.log(h1Element.parentNode);

console.log(document.parentNode);
