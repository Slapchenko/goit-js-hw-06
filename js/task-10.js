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

function createBoxes(amount) {
  const boxes = [];
  amount = refs.input.value;

  const width = 30;
  const height = 30;
  let addValue = 0;

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');

    if (!refs.boxes.firstChild) {
      box.style.width = width + addValue + 'px';
      box.style.height = height + addValue + 'px';
      addValue += 10;
    } else {
      console.log(parseInt(refs.boxes.lastChild.style.width));
      addValue += 10;
      box.style.width = parseInt(refs.boxes.lastChild.style.width) + addValue + 'px';
      box.style.height = parseInt(refs.boxes.lastChild.style.height) + addValue + 'px';
    }

    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
  }
  refs.boxes.append(...boxes);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
