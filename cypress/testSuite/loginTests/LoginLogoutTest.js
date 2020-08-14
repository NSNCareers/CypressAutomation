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

    it("Navigate to Register Page",function(){
        var homePage = new HomePage();
        var registerPage = new RegisterPage();
        cy.visit(Cypress.env('url'));
        homePage.clickOnRegisterLink();
        //var el = registerPage.getCreateAccountElement();
        registerPage.enterUserEmal(this.data.email);
        registerPage.enterUserPassword(this.data.password);
        registerPage.enterUserConfirmPassword(this.data.password);
        cy.elementContainsText('div>form>h4','Create a new account.');

    })
  })