/*1*/

/*a*/

const ulElt = document.getElementById('langages');
console.log(ulElt);

/*b*/

ulElt.innerHTML +='<li>C</li>';
console.log(ulElt);

/*c*/


/*2*/

const titre = document.getElementsByTagName("title")[0];
titre.textContent ='Quelques langages de programmation';
console.log(titre.textContent);

// Il faut toujours mettre un indice pour getElementsByTagName car cela retourne toujours une collection d'éléments.
// Si on en veut pas, il faut préciser l'indice

/*3*/

const titreElt = document.getElementsByTagName("h1")[0];
titreElt.setAttribute('id', 'titre');
console.log(titreElt);

/*4*/

const accesTitle = document.getElementsByTagName("h1")[0];

accesTitle.classList.toggle('debut');
accesTitle.classList.toggle('titre');

console.log(accesTitle.classList.toggle('titre'));

/*5*/
const liElt = document.getElementById('cpp');

if (liElt.classList.contains('hide')) {
    liElt.classList.remove("hide");
} else {
    liElt.classList.add("hide");
}

console.log(liElt);

/*6*/

const ruby = document.getElementById('langages');
const rubyElt = document.createElement('li');

rubyElt.setAttribute('id','Python');
rubyElt.textContent='Python';

ruby.appendChild(rubyElt);

console.log(ruby.innerHTML);

/*7*/

const javaScript = document.getElementById('langages');
const liJavaScript = document.createElement('li');

// On indique ce qu'on veut retrouver dans 'lijavaScript' et où'
liJavaScript.insertAdjacentText("afterbegin", 'JavaScript');
// On indique où on place l'élement dans le parent et en tant que quel élément html
javaScript.insertAdjacentElement('afterbegin', liJavaScript);
// On affiche tout le contenu ul
console.log(javaScript.innerHTML);

/*8 et 9*/

const listLangage = document.getElementById('langages');
const langageCSS = document.createElement('li');
langageCSS.textContent='Langage CSS';
const cLangage = document.getElementById('csharp');

// Parent des éléments qu'on veut remplacer (Nouvel élément, ancien élément)
listLangage.replaceChild(langageCSS, cLangage);
console.log(listLangage.innerHTML);

const throwawayNode = listLangage.removeChild(langageCSS);
console.log(throwawayNode);
















