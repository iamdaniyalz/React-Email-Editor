/// <reference types="Cypress" />

const textA = "div.blockbuilder-content-tool:nth-child(6)"
const body = "li.nav-item:nth-child(3)"
const bgColor = "div[class='sc-uJMKN eWrJFr']:nth-child(2) div"
const exportHTML = "div[class='sc-bwzfXH jVMBlZ'] button:nth-child(3)"

class Tools {

    textA() {
        return textA
    }

    body() {
        return body
    }

    bgColor() {
        return bgColor
    }

    export() {
        return exportHTML
    }
}

export {Tools}
