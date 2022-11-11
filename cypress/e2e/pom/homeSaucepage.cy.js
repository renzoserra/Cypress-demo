import homeSaucePage, { Login } from "../../pages/saucedemo/homeSaucePage";
import inventoryPage from "../../pages/saucedemo/inventoryPage";
const tests = require('../../fixtures/SaucePage.json')

describe('POM Implementation', ()=> {

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

    
/*
    it('Deberia hacer login en la pagina inventario', ()=> {
        homeSaucePage.Login('standard_user', 'secret_sauce')
        inventoryPage.elements.titleSpan().should('have.text', 'Products')
    })

    it('Deberia mostrar usuario bloqueado', ()=> {
        homeSaucePage.Login('locked_out_user', 'secret_sauce')
        homeSaucePage.elements.errorMessage().should('have.text','Epic sadface: Sorry, this user has been locked out.')
    })

    it('Deberia mostrar NO Match de usuario y contraseña', ()=> {
        homeSaucePage.Login('dumy', 'secret_sauce')
        homeSaucePage.elements.errorMessage().should('have.text','Epic sadface: Username and password do not match any user in this service')
    })*/ 


})

