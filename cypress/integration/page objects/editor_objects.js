/// <reference types="Cypress" />

const textA = "div.blockbuilder-content-tool:nth-child(6)"
const body = "li.nav-item:nth-child(3)"
const bgColor = "div[class='sc-uJMKN eWrJFr']:nth-child(2)"

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
}

export {Tools}
