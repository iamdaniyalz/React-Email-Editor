// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Cypress.Commands.add('switchToIframe', (iframeSelector, elSelector) => {
//     return cy
//         .get(iframeSelector, {timeout: 10000})
//         .should($iframeSelector => {
//             for(let i =0; i < elSelector.length; i++){
//                 expect($iframeSelector.contents().find(elSelector[i] || 'body')).to.exist
//             }
//         })
//         .then($iframe => {
//             return cy.wrap($iframe.contents().find('body'))
//         })
// })

Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe, selector) => {
    Cypress.log({
      name: 'iframe',
      consoleProps() {
        return {
          iframe: $iframe,
        };
      },
    });
    return new Cypress.Promise(resolve => {
      resolve($iframe.contents().find(selector));
    });
  });

  Cypress.Commands.add("dragTo", { prevSubject: "element" }, (subject, targetEl) => {
    cy.wrap(subject).trigger("dragstart", {force:true});
    cy.iframe().find(targetEl).trigger("drop", {force:true});
    cy.iframe().find(targetEl).trigger("dragend", {force:true});
  }
);

require('@4tw/cypress-drag-drop')

// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
