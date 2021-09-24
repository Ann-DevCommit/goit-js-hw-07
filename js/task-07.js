// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inputEl = document.querySelector('input#font-size-control')
const span = document.querySelector('span#text')

console.log(inputEl)

span.style.fontSize = `${inputEl.value}px`

inputEl.addEventListener('input', onControlChange)

function onControlChange (event){
    span.style.fontSize = `${event.currentTarget.value}px`;
    console.log(event.currentTarget.value)
}
// Вопрос: Что нужно сделать, чтобы размер шрифта при загрузке странице сразу соответствовал значению ползунка? Сейчас на старте получается прыжок из размера по умолчанию в новое значение размера



