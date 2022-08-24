/* Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul#ingredients. */

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listRef = document.querySelector('#ingredients');

// ** v1
const arrayOfItem = ingredients.map(element => {
  const item = document.createElement('li');
  item.textContent = element;
  item.classList.add('item');
  return item;
});

listRef.append(...arrayOfItem);

// * v2
// const storage = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const li = document.createElement('li');
//   li.textContent = ingredients[i];
//   li.classList.add('item');
//   storage.push(li);
// }

// ingredientsRef.append(...storage);
// console.log(storage);
