/*1*/

const elementsNav = document.getElementsByTagName('nav');
console.log(elementsNav);

/*2*/

const getLi = document.getElementsByTagName("li");
console.log(getLi);

/*3*/

const fourthItems = getLi[3];
console.log(fourthItems);

/*4*/

const nombreLi = document.querySelectorAll("li");
const liLenght = nombreLi.length;
console.log(liLenght);

/*5*/

const firstLiPair = document.getElementById('pair');
console.log(firstLiPair);

/*6*/

const liImpair = document.getElementsByClassName('impair');
console.log(liImpair);
console.log(liImpair[1]);
console.log(liImpair.length);

/*7 et 8*/

const liCibler = document.getElementsByTagName("li");
const x = liCibler[3];
const liPreviousSibling = x.previousElementSibling
const liNextSibling = x.nextElementSibling

console.log(liPreviousSibling);
console.log(liNextSibling);

/*9*/

const liParent = document.querySelector("li");
const parent = liParent.parentElement;
console.log(parent);

/*10*/

const ulParent = document.getElementsByTagName("ul");
const childElements = ulParent.children;
console.log(childElements);

/*11*/

// voir dom.js

/*12*/
/*a*/

const node = document.getElementById("nav").getElementsByTagName("li")[3].firstChild;
console.log(`Nom du noeud : ${node.nodeName}`);
console.log(`Type du noeud : ${node.nodeType}`);
console.log(`Valeur du noeuf : ${node.nodeValue}`);

/*b*/

const nodeDeux = document.getElementById("nav").getElementsByTagName("a")[2].firstChild;
console.log(`Nom du noeud : ${nodeDeux.nodeName}`);
console.log(`Type du noeud : ${nodeDeux.nodeType}`);
console.log(`Valeur du noeud : ${nodeDeux.nodeValue}`);

/*13*/
const photo = document.getElementsByTagName("ul")[0].getElementsByTagName('li')[3];
photo.textContent = "Visuals";

/*14*/

/*15*/
const lastChild = document.getElementById("nav").getElementsByTagName("li")[5];
lastChild.remove();

/*16*/

// Il faut d'abord créer l'élément
const addChild = document.createElement('li');
addChild.textContent='Whatever who cares'

//Ensuite sélectionner le parent

const parentLi = document.getElementById('nav');
parentLi.appendChild(addChild);

/* 17. Ajouter un lien dans le menu. Ce lien doit
	- venir avant "photos",
	- afficher le texte "Bibliographie",
	- pointer vers la page "biblio.html" et
	- afficher au survol la boîte de dialogue avec le texte "consulter ma bibliographie"  */

// On crée d'abord l'élément li ainsi que son lien
const biblioItem = document.createElement("li");
const biblioLink = document.createElement("a");

// On définit les caractéristiques des éléments
biblioLink.textContent='Bibliographie';
biblioLink.setAttribute('href', 'biblio.html');
biblioLink.setAttribute('alt', 'consulter ma bibliographie');

// Définir la relation entre les deux éléments

biblioItem.appendChild(biblioLink);

// Insérer dans le code

const menu = document.getElementById('nav');
const photoItem = menu.getElementsByTagName('li')[3];

// On sélectionne d'abord l'élément parent,
// Pour rajouter un élément avant un autre, on doit prendre celui qu'est à sa la place de base, donc photo

menu.insertBefore(biblioItem, photoItem);

// Ensuite on insère l'élement souhaité (biblioItem) AVANT ce qu'on avait avant (photoItem)

/* 18. Modifier le lien "Photos"
	  - changer son libellé en "Visuals"
	  - ajouter une boîte de dialogue au survol avec le texte "voir la galerie"
	  - changer la cible du lien en "visuals.html " */

const photoLink = document.getElementsByTagName('li')[3];

photoLink.setAttribute('alt', 'voir la galerie');
photoLink.setAttribute('href', 'visuals.html');

/*19*/

// On doit d'abord sélectionner le lien "photo"

const photoLien = document.getElementsByTagName('li')[3];

// On le clone

const visualsItem = photoLien.cloneNode(true);

// On modifie ensuite le clone par ce qu'on veut

visualsLink = visualsItem.querySelector('a');
visualsLink.textContent='Visuals';
visualsLink.setAttribute('href', 'visuals.html');
visualsLink.setAttribute('title', 'voir la galerie');

/*20*/

const lastLink = document.getElementsByTagName('li')[6];
lastLink.textContent ='Contact : monmail@gmail.com';



