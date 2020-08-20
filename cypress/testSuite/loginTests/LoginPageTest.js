/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import "cypress-iframe"
import HomePage from '../../pageObject/HomePage'
import RegisterPage from '../../pageObject/RegisterPage'


describe('Hooks', () => {
    before(() => {

      // runs once before all tests in the block
      cy.fixture('loginAppData').then(function(loginData){
       this.data = loginData
      })

    })
  
    beforeEach(() => {
      // runs before each test in the block
    })
  
    afterEach(() => {
      // runs after each test in the block
    })
  
    after(() => {
      // runs once after all tests in the block
    })

    it("Navigate to Login Page",function(){
      cy.visit(Cypress.env('url'));
  })
  
  })