
/*1*/

const premierParagraphe = document.getElementById('para');

premierParagraphe.style.color ='#813050';
premierParagraphe.style.marginTop ='1em';
premierParagraphe.style.marginBottom='1em';
premierParagraphe.style.backgroundColor='#D8EFE3';
premierParagraphe.style.padding='0.5em';
premierParagraphe.style.fontFamily='Baskerville, Baskerville Old Face, Garamond, Hoefler Text, Times New Roman, serif';
premierParagraphe.style.fontSize='2em';
premierParagraphe.style.width='5em';
premierParagraphe.style.marginLeft = 'auto';
premierParagraphe.style.marginRight = 'auto';
premierParagraphe.style.textAlign='center';


/*2*/

const parametre = document.getElementById('para');
const style = window.getComputedStyle(parametre, null);

console.log("Police de caractères : ", style.fontFamily);
console.log("Couleur :", style.color);