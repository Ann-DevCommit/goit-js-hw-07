const categoriesItemsEl = document.querySelectorAll("#categories li.item")
console.log(categoriesItemsEl);


const numberOfCategoriesItems = `В списке ${categoriesItemsEl.length} категории.`;
console.log(numberOfCategoriesItems);


categoriesItemsEl.forEach(category => {
        return (
        console.log("Категория: ", category.querySelector("h2").textContent),
        console.log("Количество элементов: ", category.lastElementChild.querySelectorAll("li").length)
)
})

