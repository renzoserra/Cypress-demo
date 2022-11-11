class homeSaucePage{

    elements = {

        usernameInput: () => cy.get('[data-test=username]'),
        passwordInput: () => cy.get('[data-test=password]'),
        btnLogin: () => cy.get('[data-test=login-button]'),
        errorMessage: () => cy.get('H3[data-test=error]'),
    }

    Login(username, password){
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password)
        this.elements.btnLogin().click();

    }
}

module.exports  = new homeSaucePage();
