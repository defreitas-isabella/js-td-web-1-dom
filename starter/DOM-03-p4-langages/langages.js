// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
SOURCE :
- https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/3501891-modifiez-la-structure-de-la-page
- https://github.com/oc-courses/javascript-web
*/

/* DOM - PREPA 4 : « Langages » : 
Ajouter sous la liste des langages un paragraphe
"En voici une liste plus complète."
où le mot "liste" est un lien vers l'URL suivante :
https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation.
*/

const langages = document.getElementById('langages');
const paragraphe = document.createElement('li');
paragraphe.textContent='Voici une liste plus complète ';

const lien =document.createElement('a');
lien.setAttribute('href', 'https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation');
lien.textContent='Wikipedia';

paragraphe.appendChild(lien);

langages.appendChild(paragraphe);

console.log(langages.innerHTML);