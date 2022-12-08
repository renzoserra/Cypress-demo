class inventoryPage{

    elements ={
        titleSpan: () =>  cy.get('.title'),
        sortOptionList: () => cy.get('.product_sort_container'),
        sortOptionsAZ: () => cy.get('.product_sort_container > option:nth-child(0)'),
        sortOptionsZA: () => cy.get('.product_sort_container > option:nth-child(1)'),
        sortOptionsLoHi: () => cy.get('.product_sort_container > option:nth-child(2)'),
        sortOptionsHiLo: () => cy.get('.product_sort_container > option:nth-child(3)'),
        article1Add: () => cy.get('.inventory_item_price + [data-test="add-to-cart-sauce-labs-backpack"]'),
        article1Remove: () => cy.get('.inventory_item_price + [data-test="remove-sauce-labs-backpack"]'),
        shoppingCartBadge: () => cy.get('.shopping_cart_badge')
    }
}
module.exports  = new inventoryPage();
