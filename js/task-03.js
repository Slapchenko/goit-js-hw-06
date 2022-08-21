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
galleryRel.style.justifyContent = 'space-around';
galleryRel.style.margin = '0';
galleryRel.style.padding = '0';
galleryRel.style.listStyle = 'none';

const storage = [];

for (let i = 0; i < images.length; i += 1) {
  const li = document.createElement('li');
  const image = document.createElement('img');
  image.src = images[i].url;
  image.alt = images[i].alt;
  image.width = 320;
  image.height = 212;
  li.appendChild(image);
  storage.push(li.outerHTML);
}

galleryRel.insertAdjacentHTML('beforeend', storage.join(''));
