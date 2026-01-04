let copyButton = document.getElementById("copy-button")
let copyButtonContainer = document.getElementById("copy-button-container")

function copyPassword () {
    const paragraph = document.createElement("p")
    const node = document.createTextNode("Copied")
    paragraph.appendChild(node)

    copyButtonContainer.appendChild(paragraph)

    let generatedPassword = document.getElementById("password-value")
    navigator.clipboard.writeText(generatedPassword.innerText)
}

copyButton.addEventListener('click', copyPassword)

