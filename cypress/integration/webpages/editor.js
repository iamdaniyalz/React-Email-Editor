///<reference types="Cypress" />

require('cypress-iframe');
require('@4tw/cypress-drag-drop')
import { Tools } from "../page objects/editor_objects";

const tools = new Tools()



function movePiece (selector, x, y) {
  //cy.get(selector)
  // cy.iframe().find(selector)
  // .trigger('mousedown', { which: 1 }, { force: true })
  // .trigger('mousemove', { clientX: x, clientY: y }, { force: true })
  // .trigger('mouseup', { force: true })
  cy.iframe().find(selector)
      .trigger('click')
    //   .trigger('mousedown', { button: 0 , force: true , view: window})
    //   .trigger('mousemove', {
    //   clientX: x,
    //     clientY: y,
    //   screenX: x,
    //     screenY: y,
    //   pageX: x,
    //     pageY: y
    //   }, { force: true, view: window })
    // .trigger('mouseup', { force: true })

}

describe('Navigate to the email editor', () => {
  it('Editor should open', () => {
    cy.visit('') //Fetches the URL from cypress.json      
      //cy.switchToIframe('iframe',tools.textA).as('tool_textA')
      // cy.get('iframe')
      //   .iframe('li.nav-item:nth-child(2)')
      //   .should('exist')
      cy.frameLoaded("iframe:nth-child(1)")

  })  
})


describe('Drag and Drop A', () => {
  it('Drag A', () => {
    // cy.iframe().find('li.nav-item:nth-child(2)').should('be.visible').click()
    // cy.reload() 
    //cy.iframe().find('#u_column_1 > div > div > div.blockbuilder-layer.blockbuilder-layer-selectable > div.blockbuilder-layer-selector.blockbuilder-layer-selector-first').trigger('mousedown')
    //cy.iframe().find('div.blockbuilder-content-tool:nth-child(6)').move({x:300, y:100})
    movePiece("div.blockbuilder-content-tool:nth-child(6)", 250, 100)
// cy.iframe().find("div.blockbuilder-content-tool:nth-child(6)").dragTo("#u_column_1 > div > div > div.blockbuilder-layer.blockbuilder-layer-selectable > div.blockbuilder-layer-selector.blockbuilder-layer-selector-first");
// cy.iframe().find('#u_column_1 > div > div > div.blockbuilder-layer.blockbuilder-layer-selectable > div.blockbuilder-layer-selector.blockbuilder-layer-selector-first').click()
// cy.iframe().find('div.blockbuilder-content-tool:nth-child(6)')
//   .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 }, { force: true })
//   .trigger('mousemove', { which: 1, pageX: 600, pageY: 600 }, { force: true })
//   .trigger('mouseup', { force: true })

  })  
})