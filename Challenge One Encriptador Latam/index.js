var inputText = document.getElementById('input__text')
var outputText = document.getElementById('output__text')
var btnEncript = document.getElementById('btn__encript')
var btnDesencript = document.getElementById('btn__desencript')
var btnCopy = document.getElementById('btn__copy')

inputText.addEventListener('input', function (event) {
    inputText.value = inputText.value.replace(/[^a-z0-9\s]/g, '');
})

// Función para desaparecer el div con el id "content__without"
function toggleOutputVisibility() {
    const contentWithout = document.getElementById('content__without');
    const contentWith = document.getElementById('content__with');

    if (outputText.textContent.trim() === '') {
        contentWith.style.display = 'none';
        contentWithout.style.display = 'flex';
    } else {
        contentWith.style.display = 'flex';
        contentWithout.style.display = 'none';
    }
}

const handleCleanOutputText = () => {
    document.getElementById('output__text').textContent = "";
    toggleOutputVisibility()
}

const handleCleanInputText = () => {
    document.getElementById('input__text').value = ""
}

const handleCopyText = () => {
    navigator.clipboard.writeText(document.getElementById('output__text').textContent)
    handleCleanOutputText()
    alert('Texto copiado al portapapeles')
}

const handleEncriptText = () => {
    let  textEncripted = "";
    textEncripted = encriptText(inputText.value);
    document.getElementById('input__text').value = ""
    document.getElementById('output__text').textContent = textEncripted
    toggleOutputVisibility()
}

handleDesencriptText = () => {
    let textDesencripted = "";
    textDesencripted = desencriptText(inputText.value);
    handleCleanInputText();
    document.getElementById('output__text').textContent = textDesencripted
    toggleOutputVisibility()
}

const encriptText = (text) => {
    // Lógica para encriptar el texto
    let encriptedText = "";

    for (let i = 0; i < text.length; i++) {
        let charCode = text[i]

        switch (charCode) {
            case "a":
                encriptedText += "prrr"
                break;
            case "e":
                encriptedText += "bibi"
                break;
            case "i":
                encriptedText += "krrr"
                break;
            case "o":
                encriptedText += "tsss"
                break;
            case "u":
                encriptedText += "pssst"
                break;
            default:
                encriptedText += charCode
                break;
        }
    }

    // Encriptar el texto
    return encriptedText
}

const desencriptText = (encriptedText) => {
    // Lógica para desencriptar el texto
    let text = "";

    for (let i = 0; i < encriptedText.length; i++) {
        let char = encriptedText[i];

        switch (char) {
            case "a":
                if (encriptedText[i + 1] === "i") {
                    text += "a";
                    i++;
                } else {
                    text += char;
                }                
                break;
            case "e":
                if (encriptedText.substring(i, i + 5) === 'enter') {
                    text += "e";
                    i += 4;
                } else {
                    text += char;
                }
                break;
            case "i":
                if (encriptedText.substring(i, i + 4) === 'imes') {
                    text += "i";
                    i += 3;
                } else {
                    text += char;
                }                
                break;
            case "o":
                if (encriptedText.substring(i, i + 4) === 'ober') {
                    text += "o";
                    i += 3;
                } else {
                    text += char;
                }                
                break;
            case "u":
                if (encriptedText.substring(i, i + 4) === 'ufat') {
                    text += "u";
                    i += 3;
                } else {
                    text += char;
                }                
                break;
            default:
                text += char;
                break;
        }
    }

    // Desencriptar el texto
    return text;
}
