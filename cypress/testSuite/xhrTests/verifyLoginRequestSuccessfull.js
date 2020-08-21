/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import "cypress-iframe"
import HomePage from '../../pageObject/HomePage'
import LoginPage from "../../pageObject/loginPage"


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

    it("Login Unregistered User",function(){
      var homePage = new HomePage();
      var loginPage = new LoginPage();

      cy.visit(Cypress.env('url'));
      
      // Start server
      cy.server();

      //Listen to API Request
      cy.route('Get','http://loging.nsncareers.com/').as('getStatusCode');

      
      homePage.clickOnLoginLink();
      loginPage.enterUserEmal(this.data.email);
      loginPage.enterUserPassword(this.data.password);
      loginPage.clickOnRememberMeCheckBox();
      loginPage.clickOnLoginButton();

      //cy.wait('@getStatusCode').its('status').should('eq',200);
  })
  })