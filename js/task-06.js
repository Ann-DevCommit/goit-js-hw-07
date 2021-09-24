// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// -     Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// -     Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.


const inputEl = document.querySelector('input');
const inputDataLength = document.querySelector('input[data-length="6"]');
const inputDataLengthNumber = Number(inputDataLength.dataset.length);

// console.log(inputDataLengthNumber)
// console.log(typeof inputDataLengthNumber)
// console.log(inputEl.value === inputDataLengthNumber)
// console.log(inputEl.value)

function onInputBlur(event) {
    if (inputEl.value.length === inputDataLengthNumber && !inputEl.value.includes(" ")) {
        if (inputEl.classList.contains('invalid')) {
             inputEl.classList.replace('invalid', 'valid')
         }
        inputEl.classList.add('valid');
        console.log(inputEl)
    } else {
        if (inputEl.classList.contains('valid')) {
             inputEl.classList.replace('valid', 'invalid')
         }
        inputEl.classList.add('invalid');
        console.log(inputEl)
    
    }

}

inputEl.addEventListener('blur', onInputBlur)
