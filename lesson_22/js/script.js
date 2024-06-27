"use strict"
// Задача №1
let someVar = 0
++someVar

if (someVar) {
	console.log(someVar)
}


// Задача №2
for (let i = 1; i <= 10; i++) {
    console.log("Пункт №" + i)
}


// Задача №3

if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000')
}
//не виконаеться



function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || b === 0) {
        return "Результат ділення: Невірні аргументи"
    }

    const result = a / b;
    return "Результат ділення: " + result
}
console.log(divide(10, 2))




// Створюємо масив з 5 елементів
const myArray = [5, 8, 10, 15, 20]

// Обробка масиву за допомогою методу перебору (наприклад, forEach)
myArray.forEach((element) => {
    if (element === 10) {
        console.log("Знайдено число 10!")
    }
})
