/// <reference types="Cypress" />

const textA = "div .blockbuilder-content-tool:nth-child(6)"
const button = "li.nav-item:nth-child(2)"


const username = ".dropdown-toggle > div > span:nth-child(1)"
const inboxSelector = ".dropdown-menu  select[ng-model='identity.selectedInbox']"

//Navigation bar Objects
const hamburgerButton = "a[ng-click='minimalize()']"
const navBar = "#side-menu"
const logo = ".nav-header a[href='#/welcome']"
const welcome = "li[ui-sref-active='active'] > a[href='#/welcome']"
const upload = ".sidebar-collapse a[href='#/upload']"
const inbox = ".sidebar-collapse a[href='#/inbox/']"
const review = ".sidebar-collapse a[href='#/view/']"
const neverTwice = "li[ng-if='showNeverTwiceMenu()']"
const list = ".sidebar-collapse a[href='#/never_twice_list']"
const studio = '#ta-studio'
const backend = ".sidebar-collapse a[href='#/studio_backends']"
const documentation = "li[ng-if='showDocumentationMenu()']"
const userGuide = ".sidebar-collapse a[href='#/doc_user_guide']"
const settings = "li[ng-if='showSettingsMenu()']"
const billing = ".sidebar-collapse a[href='#/ov_billing']"
const apiKeys = ".sidebar-collapse a[href='#/ov_api_keys']"

class Tools {

    textA() {
        return textA
    }
}

export {Tools}
