const lengthContainer = document.getElementById("char-length-container")
const lengthRange = document.getElementById("char-length")

let lengthOutput = lengthContainer.querySelector('output[name="character-length"]')
lengthOutput.value = lengthRange.value

lengthRange.addEventListener("input", () => {
    lengthOutput.value = lengthRange.value
})



