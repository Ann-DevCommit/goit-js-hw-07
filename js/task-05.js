//     Задание 5

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputEl = document.querySelector('input#name-input');
const titlePartEl = document.querySelector('span#name-output');
const titlePartInitialEl = titlePartEl.innerHTML;



inputEl.addEventListener('input', (event) => {
    if (inputEl.value !== '') {
        titlePartEl.textContent = event.currentTarget.value;
    }
    else {
        titlePartEl.textContent = titlePartInitialEl
    }
    
})






