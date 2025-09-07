
// Завдання 1

// Створіть слайдер на сторінці, який показує зображення. При переміщенні слайдера виконуйте деякі дії, наприклад, змінюйте розмір зображення. Використайте debounce для того, щоб ці дії виконувалися не занадто часто при швидкому переміщенні слайдера.


const inpEl = document.querySelector(".slider__input")
const imgEl = document.querySelector(".slider__image")

inpEl.addEventListener("input", _.debounce(onChangeInp,200) )

function onChangeInp(event) {

    
    const size =  event.target.value + "%"

    console.log(size);

    imgEl.style.width = size 
}




// Завдання 2

// Потрібно забезпечити плавне переміщення об'єкту при русі мишкою. Рішення: використовуйте метод debounce з бібліотеки lodash. Встановіть час затримки в мілісекундах, наприклад 100мс, і передайте функцію, яка буде виконуватися при переміщенні мишкою.


 
const boxEl = document.querySelector("#box")
console.log(boxEl);

 
const btnEl = document.querySelector(".bnt")
console.log(btnEl);

btnEl.addEventListener("click", () => {

    window.addEventListener("mousemove", mouseKey)




function mouseKey(event) {
    console.log(event.clientX);
        console.log(event.clientY);


        const x = event.clientX + "px"
        const y = event.clientY + "px"
        boxEl.style.transform = `translate(${x},${y})`;
   
}


})

