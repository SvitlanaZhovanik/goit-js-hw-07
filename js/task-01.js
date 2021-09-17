
const listCategoriesEl = document.querySelectorAll('.item')
console.log(`В списке ${listCategoriesEl.length} категории.`)

const categoryEl = listCategoriesEl.forEach((elem)=>{
    console.log(`Категория:${elem.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${elem.querySelectorAll('li').length}`)
})