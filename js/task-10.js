/* Задание 10 (выполнять не обязательно)
Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы. */

const refs = {
  input: document.querySelector('input'),
  createEl: document.querySelector('[data-create]'),
  destroyEl: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

let counterValue = 0;

refs.input.addEventListener('input', getValueInput);
refs.createEl.addEventListener('click', createBoxes);
refs.destroyEl.addEventListener('click', destroyBoxes);

function getValueInput(event) {
  counterValue = Number(event.currentTarget.value);
}

function createBoxes() {
  let sizeEl = 30;
  const storageEl = [];

  for (let i = 0; i < counterValue; i += 1) {
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    if (i === 0) {
      div.style.width = `${sizeEl}px`;
      div.style.height = `${sizeEl}px`;
    } else {
      sizeEl += 10;
      div.style.width = `${sizeEl}px`;
      div.style.height = `${sizeEl}px`;
    }

    storageEl.push(div.outerHTML);
  }

  refs.boxes.insertAdjacentHTML('beforeend', storageEl.join(''));
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
