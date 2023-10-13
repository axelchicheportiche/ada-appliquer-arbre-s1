// exercice 1

const ingredient = ['Pâtes', ' Oeuf', ' Sel', ' Poivre', ' Lardon', ' Oignon', ' Parmesan'];

let nbIngred = (ingredient.length)

const ingredient1 = document.getElementById("ingred");
ingredient1.innerHTML = 'Il y a ' + nbIngred + ' ingrédient dans notre recette !';

const ingredient2 = document.getElementById("ingred2");
ingredient2.innerHTML = 'Voici la liste des ingédients : </br>' + ingredient;

const ingredient123 = ['1. Pâtes', '2. Oeuf', '3. Sel', '4. Poivre', '5. Lardon', '6. Oignon', '7. Parmesan'];

ingredient123.sort();

const ingredient1232 = document.getElementById("ingred3");

ingredient1232.innerHTML = ingredient123.join("<br><br>");

const ingredientabc = ['Pâtes', 'Oeuf', 'Sel', 'Poivre', 'Lardon', 'Oignon', 'Parmesan'];
ingredientabc.sort();

const ingredientabc2 = document.getElementById("ingred4");

ingredientabc2.innerHTML = 'Ordre alphabétique :<br>'+ ingredientabc.join(', ');


console.log(nbIngred)
