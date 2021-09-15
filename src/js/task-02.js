const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsEl = document.querySelector("#ingredients")
const createItemEl =  ingredients.forEach((elem)=>{ 
  const itemEl = document.createElement('li')
  itemEl.textContent = elem
  return ingredientsEl.appendChild(itemEl)
})
