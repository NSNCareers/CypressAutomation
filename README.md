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
* 


# Commands

* ./node_modules/.bin/cypress run => Run all tests headless
* ./node_modules/.bin/cypress run --headed => Run all tests 
* ./node_modules/.bin/cypress run --headed --browser chrome => Run all tests in specific browser