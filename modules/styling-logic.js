
export function setStylingLogic (input, mainFunction) {

    const output = input.closest('.task-block').querySelector('.output-text')

        input.addEventListener('input', event => {
            if (!event.target.value) {
                output.classList.remove('false')
                output.classList.remove('true')
                output.textContent = ''
                return
            }

            if (mainFunction(event.target.value)) {
                output.textContent = output.dataset.true
                output.classList.remove('false')
                output.classList.add('true')
            } else {
                output.textContent = output.dataset.false
                output.classList.remove('true')
                output.classList.add('false')
            }
        })
}


