const lengthContainer = document.getElementById("char-length-container")
const lengthRange = document.getElementById("char-length")

let lengthOutput = lengthContainer.querySelector('output[name = character-length]')
lengthOutput.value = lengthRange.value

lengthRange.addEventListener("input", () => {
    lengthOutput.value = lengthRange.value
})

function updateLengthBar() {
    const minLength = lengthRange.min
    const maxLength = lengthRange.max
    let value = (lengthRange.value - minLength) / (maxLength - minLength) * 100

    lengthRange.style.background = `linear-gradient(to right, var(--green-200) 0%, var(--green-200) ${value}%, var(--grey-850) ${value}%, var(--grey-850))`
}

lengthRange.addEventListener('input', updateLengthBar)