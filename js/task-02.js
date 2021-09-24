const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector("#ingredients")


const makeListOfIngredients = ingredients.map(ingredient => {

  const ItemEl = document.createElement("li");
  ItemEl.textContent = `${ingredient}`;

  return ItemEl
  
})

console.log(makeListOfIngredients)

listEl.append(...makeListOfIngredients)

