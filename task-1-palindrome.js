
import { setStylingLogic } from "./modules/styling-logic.js";

const isPalindrome = function(s) {
    //строка приводится к нижнему регистру, все символы, кроме цифр и букв нижнего регистра убираются выражением regex
    const newS = s.toLowerCase().replaceAll(/[^0-9a-zа-я]/gi, '')

    //буквы сравниваются парами начало-конец
    for (let i = 0; i < newS.length; i++) {
        if (!(newS[i] === newS[newS.length - 1 - i])) return false
    }
    return true
};

window.addEventListener('DOMContentLoaded', () => {
    setStylingLogic(document.querySelector('.palindrome-input'), isPalindrome)
})
