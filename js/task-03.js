/* Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

<ul class="gallery"></ul>

Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы. */

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRel = document.querySelector('.gallery');
galleryRel.style.display = 'flex';
galleryRel.style.flexWrap = 'wrap';
galleryRel.style.justifyContent = 'space-evenly';
galleryRel.style.margin = '0';
galleryRel.style.padding = '0';
galleryRel.style.listStyle = 'none';

// *v1
const createGalleryItemsMarkup = images.map(image => {
  return `<li><img class = "gallery-item" src = "${image.url}" alt = "${image.alt}" style="width: 320px; height: 212px;"></li>`;
});

galleryRel.insertAdjacentHTML('beforeend', createGalleryItemsMarkup.join(''));

// *v2
// const addImages = images.map(element => {
//   const li = document.createElement('li');
//   li.style.marginBottom = '20px';

//   const image = document.createElement('img');
//   image.src = element.url;
//   image.alt = element.alt;
//   image.width = 320;
//   image.height = 212;

//   li.appendChild(image);

//   return li.outerHTML;
// });

// galleryRel.insertAdjacentHTML('beforeend', addImages.join(''));

// *v3
// for (let i = 0; i < images.length; i += 1) {
//   const li = document.createElement('li');
//   li.style.marginBottom = '20px';
//   const image = document.createElement('img');
//   image.src = images[i].url;
//   image.alt = images[i].alt;
//   image.width = 320;
//   image.height = 212;
//   li.appendChild(image);
//   storage.push(li.outerHTML);
// }
