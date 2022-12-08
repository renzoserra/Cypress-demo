import homeSaucePage, { Login } from "../../pages/saucedemo/homeSaucePage";
import inventoryPage from "../../pages/saucedemo/inventoryPage";
const tests = require('../../fixtures/SaucePageTestLogin.json')
describe('Test Login', ()=> {

    beforeEach('Inicia la web', ()=> {
        cy.visit('https://www.saucedemo.com/')
      })

    tests.forEach( test => {
        it(test.name, () =>{
            homeSaucePage.Login(test.username, test.password)
            if(test.name === 'Deberia hacer login en la pagina inventario'){
                inventoryPage.elements.titleSpan().should('have.text', test.expected)
            }else{
                homeSaucePage.elements.errorMessage().should('have.text', test.expected)
            }
        })
    })


})

