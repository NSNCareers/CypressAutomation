# CypressAutomation

# Installing Cypress 

* Create folder
* Install node.js  "brew install node"
* npm init => This will generate package.json file used in installing project dependencies
* npm install cypress --save -dev to add cypress to package.json and install cypress and its dependencies
* Or add "dependencies": {
    "cypress": "^4.12.1"
  } to your package.json file with the version of cypress you want
* node_modules/.bin/cypress open to open Test Runner
* You can override the config file by using the cypress.json file
* /// <reference types="Cypress" /> Add to your test file to get inteliscence 


# Commands

* ./node_modules/.bin/cypress run => Run all tests headless
* ./node_modules/.bin/cypress run --headed => Run all tests 
* ./node_modules/.bin/cypress run --headed --browser chrome => Run all tests in specific browser
* ./node_modules/.bin/cypress run --spec cypress/testSuite/loginTests/LoginLogoutTest.js => to run specific test
* ./node_modules/.bin/cypress run --spec cypress/testSuite/loginTests/LoginLogoutTest.js --headed

# Test Commands

* Visibility => cy.get('.product:visible').should('have.length',4)
* Get second array element => cy.get('.product').find('.product').eq(2)
* Click on second element where text == 'submit' => cy.get('.product:visible').find('.product').eq(2).contains('submit').click()
* Iterate through list of elements
    cy.get('.product:visible')
            .each(($el,index,$list) => {
                var elementText = $el.find('').text();
                if(elementText.includes(''))
                {
                    $el.find('').click();
                }
            });

* Get text by resolving promise
    cy.get('.product:visible').then(function(logo)
            {
            var text = logo.text()
            });

* Create an Alias for a locator so you can use in test

 cy.get('.product:visible').as('ProductLocator');
 cy.get('@ProductLocator').click()

 * You can also use Contains to locate element if element is unique

  cy.get('.product:visible').as('ProductLocator');
  cy.get('@ProductLocator').click()

* Chaining of Assertions 

cy.contains('James').should('be.checked').and('have.value','')

* Alerts: Cypress handles all alerts by default. To verify alert is trigered, use the On() method

  cy.on('window:alert',(stri)=>{
           expect(stri).to.equal('');
        })

* Child Tabs: Cypress does not navigate to child tabs. Target attribute will use href to open new window. If we remove target attribute, then we shall not open new child window. Use invoke()

 cy.get('.product:visible').invoke('removeAttr','Target').click();

* Browser navigation

cy.go('back');

* Verify sub-string

cy.url().should('include','')

* Get next sibling, we then resolve using promise

 cy.get('.product:visible').next().then(function(price){
           var pricesTage = price.text()
        })


* Mouse hoover will use JQuerry function show to hoover over. You can also use force to click on hidden elements

cy.get('.product:visible').invoke('show')

 cy.contains('product').click({force:true})

* FRames: Install plugin
  npm install -D cypress-iframe

  Then declare  cypress-iframe

  /// <reference types="cypress-iframe" />

import "cypress-iframe"

 cy.frameLoaded('') // Load iframe
 //Navigate to iframe. eq() helps us to locate element index
 cy.iframe().find('').eq(3).click()


 