const passValue = document.getElementById('password-value')
const passLength = document.getElementById('char-length')
const passForm = document.getElementById('password-form')
const passSettings = document.getElementById('password-settings')

const charSets = {
    'uppercase': "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    'lowercase': "abcdefghijklmnopqrstuvwxyz",
    'numbers': "0123456789",
    'symbols': "!@#$%&*()-_+={}[]|\\/:;\"'<>,.?~^"
}

function generatePassword (e) {
    e.preventDefault()

    let charSet = ""
    let result = ""

    const passChars = passSettings.querySelectorAll('input[type="checkbox"]')
    passChars.forEach(checkbox => {
        if (checkbox.checked) {
            charSet += charSets[checkbox.id]
        }
    })

    const charLength = parseInt(passLength.value)
    if (charSet === "" || charLength <= 0) {
        passValue.innerText = "ERROR!"
        return
    }
    for (let i = 0; i < charLength; i++) {
        let charIndex = Math.floor(Math.random() * charSet.length)
        result += charSet[charIndex]
    }

    passValue.innerText = result
}
passForm.addEventListener('submit', generatePassword)
