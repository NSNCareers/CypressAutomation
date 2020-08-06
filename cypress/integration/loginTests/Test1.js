/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import "cypress-iframe"

describe('Login tests',function(){
    it('Navigate to Homepage',function(){
        cy.visit('http://loging.nsncareers.com');

        cy.contains('product').click({force:true})
        
    })
})