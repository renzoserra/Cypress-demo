
import homeSaucePage, { Login } from "../../pages/saucedemo/homeSaucePage";
import inventoryPage from "../../pages/saucedemo/inventoryPage";

describe('Agregar a carro de compras', ()=>{

      it('Deberia iniciar sesión', ()=>{
        cy.visit('https://www.saucedemo.com/')
        homeSaucePage.Login('standard_user','secret_sauce')
        inventoryPage.elements.titleSpan().should('have.text', "Products")
      })

      it('Deberia agregar 1 producto al carro de compras', ()=>{
        
       inventoryPage.elements.article1Add()
       .then($btn1 => {
        
         const txtBtn1 = $btn1.text();
        
       inventoryPage.elements.article1Add().click()

        inventoryPage.elements.article1Remove()
        .should('not.eq', txtBtn1)

        inventoryPage.elements.shoppingCartBadge().should('have.length', 1)

      })
      

})
it ('Deberia eliminar el producto previamente agregado al carro de compras', ()=>{

  inventoryPage.elements.article1Remove()
  .then($btn2 => {

    const txtBtn2 =$btn2.text();

    inventoryPage.elements.article1Remove().click()

    inventoryPage.elements.article1Remove()
    .should('not.eq',txtBtn2)

    inventoryPage.elements.shoppingCartBadge().should('be.visible')
    
  })

  

})
})
