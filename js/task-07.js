/* Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span> */

const rangeInputRef = document.querySelector('#font-size-control');
const outputRef = document.querySelector('#text');

rangeInputRef.setAttribute('value', `${rangeInputRef.min}`);

rangeInputRef.addEventListener('input', onChangeRangeInput);

function onChangeRangeInput(event) {
  outputRef.style.fontSize = `${event.target.value}px`;
}
