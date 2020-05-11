///<reference types="Cypress" />

require('cypress-iframe');
import { Tools } from "../page objects/editor_objects";

const tools = new Tools()

const getIframeDocument = () => {
  return cy
  .get('#editor-1 > iframe')
  // Cypress yields jQuery element, which has the real
  // DOM element under property "0".
  // From the real DOM iframe element we can get
  // the "document" element, it is stored in "contentDocument" property
  // Cypress "its" command can access deep properties using dot notation
  // https://on.cypress.io/its
  .its('0.contentDocument').should('exist')
}

const getIframeBody = () => {
  // get the document
  return getIframeDocument()
  // automatically retries until body is loaded
  .its('body').should('not.be.undefined')
  // wraps "body" DOM element to allow
  // chaining more Cypress commands, like ".find(...)"
  .then(cy.wrap)
}

function movePiece (selector, x, y) {
  getIframeBody().find(selector)
      .trigger('mousedown', { which: 1 , force: true , view: window})
      .trigger('mousemove', {
      clientX: x,
        clientY: y,
      screenX: x,
        screenY: y,
      pageX: x,
        pageY: y
      }, { force: true, view: window })
    .trigger('mouseup', { force: true })

}

describe('Navigate to the email editor', () => {
  it('Editor should open', () => {
    cy.visit('') //Fetches the URL from cypress.json      
    //cy.frameLoaded("iframe:nth-child(1)")
 
    //Tried the following approaches too
        //cy.switchToIframe('iframe',tools.textA).as('tool_textA')

        // cy.get('iframe')
        //   .iframe('li.nav-item:nth-child(2)')
        //   .should('exist')
  })  
})


describe('Drag and Drop A', () => {
  it('Drag A', () => {

    movePiece(tools.textA(), 300, 150)

    //Tried the following solutions for Drag A but got same result as the above movePiece function
      //  cy.iframe().find('div.blockbuilder-content-tool:nth-child(6)').move({x:300, y:100})
      
      //  cy.iframe().find("div.blockbuilder-content-tool:nth-child(6)").dragTo("#u_column_1 > div > div > div.blockbuilder-layer.blockbuilder-layer-selectable > div.blockbuilder-layer-selector.blockbuilder-layer-selector-first");
      
      //  getIframeBody().find("div.blockbuilder-content-tool:nth-child(6)").dragTo("#u_column_1 > div > div > div.blockbuilder-layer.blockbuilder-layer-selectable > div.blockbuilder-layer-selector.blockbuilder-layer-selector-first");

      //  cy.iframe().find('div.blockbuilder-content-tool:nth-child(6)')
        //   .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 }, { force: true })
        //   .trigger('mousemove', { which: 1, pageX: 600, pageY: 600 }, { force: true })
        //   .trigger('mouseup', { force: true })

  })  
})

describe('Change Colour', () => {
  it('Go to body tab', () => {
    getIframeBody().find(tools.body()).click()
  })

  it('Change color', () => {
      // select the new color value in the <input type="color">
      // element and trigger "change" event
      getIframeBody().find(tools.bgColor())
          .invoke('val', '#000000')
          .trigger('change')
  })
})