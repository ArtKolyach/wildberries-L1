
import {setStylingLogic} from "./modules/styling-logic.js";

const checkNumber = (value) => {
    const number = Number(value)

    let sum = 1

    for (let i = 2; i <= number/2; i++) {
         if (number % i === 0) sum += i
    }

    return sum === number
}

window.addEventListener('DOMContentLoaded', () => {
    setStylingLogic(document.querySelector('.strange-numbers-input'), checkNumber)
})