const rangeLength = document.querySelector('output[name = "character-length"]')
const rangeInput = document.getElementById('char-length')
const passwordOptions = document.getElementById('password-settings')
const passOption = passwordOptions.querySelectorAll('input[type = "checkbox"]')
const strengthLvl = document.getElementById('strength-level')

function strengthBarUpdate() {
    let countChecked = 0
    passOption.forEach(opt => {
        if (opt.checked) {
            countChecked += 1
        }
    })

    let rangeInt = Number.parseInt(rangeLength.value)
    if (rangeInt >= 15 && countChecked > 3) {
        document.getElementById('strength-bars').dataset.strength = 4
        strengthLvl.innerText = 'STRONG'
    } else if (rangeInt >= 10 && countChecked > 2) {
        document.getElementById('strength-bars').dataset.strength = 3
        strengthLvl.innerText = 'MEDIUM'
    } else if (rangeInt >= 5 && countChecked > 1) {
        document.getElementById('strength-bars').dataset.strength = 2
        strengthLvl.innerText = 'WEAK!'
    } else if (rangeInt > 0 && countChecked >= 0) {
        document.getElementById('strength-bars').dataset.strength = 1
        strengthLvl.innerText = 'TOO WEAK!'
    } else {
        document.getElementById('strength-bars').dataset.strength = 0
        strengthLvl.innerText = ''
    }
}


rangeInput.addEventListener('change', strengthBarUpdate)

passOption.forEach(option => {
    option.addEventListener('change', strengthBarUpdate)
})
