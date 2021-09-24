// Задание 4

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//     Создай переменную counterValue в которой будет храниться текущее значение счетчика.
//     Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//     Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса




let counterValue = 0;
const increment = function() {
    counterValue += 1;
};
const decrement = function () {
    counterValue -= 1;
};

const decrementButtonEl = document.querySelector('#counter button[data-action = "decrement"]');
const incrementButtonEl = document.querySelector('#counter button[data-action = "increment"]');
const valueEl = document.querySelector('#counter #value');

decrementButtonEl.addEventListener('click', () => {
    decrement();
    valueEl.textContent = counterValue;
})

incrementButtonEl.addEventListener('click', () => {
    increment();
    valueEl.textContent = counterValue;
})



