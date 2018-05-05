let recipe ={
    name : 'soup',
    portions : 4,
    ingredients : ['pumpkin', 'carrot', 'water', 'broth']
};

console.log(recipe.name)
console.log(recipe.portions)
console.log(recipe.ingredients)
// of person[something]

let divRecipe = document.getElementById('recipe');

divRecipe.innerHTML = '<h2>' + recipe.name + '</h2>';
divRecipe.innerHTML += '<h2>' + recipe.portions + '</h2>';

for(let i = 0; i<recipe.ingredients.length; i++){
    divRecipe.innerHTML +="<li>" + recipe.ingredients[i] + '</li>'
}


