// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
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

// Click on webelement
Cypress.Commands.add("clickOnElement", (element) => { 
    cy.get(element).click();
});

// Click on element with text locator
Cypress.Commands.add("clickOnElementWithText", (element) => { 
    cy.contains(element).click();
});

// Verify element contains text
Cypress.Commands.add("elementContainsText", (element,text) => { 
    cy.get(element).should('contain.text',text);
});

//Get text from element
Cypress.Commands.add("GetTextFromElement", (element) => { 
    cy.get(element).then(function(ele)
    {
        var text = ele.text();
        return text;
    })
});