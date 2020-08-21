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

    it("Add User to DB",function(){

      let body=
      {
        "name": "James",
        "DOB": "22/01/1980"
      }
      
      //cy.request('POST','http://loging.nsncareers.com/',body)
      //.then(function(response)
      //{
        //expect(response.body).to.have.property('Message','Success');
      //})
  })
  })