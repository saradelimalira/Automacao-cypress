describe('Assertions', () =>{

    it('Assertions Implicitas', () =>{
        describe('Assertions', () => {
            it ('Assertions Implicitas', () => {
               //url
                cy.visit("https://www.saucedemo.com/")

                cy.url().should('include', 'sauce')
                .and("eq", 'https://www.saucedemo.com/')
                .and("contain", 'demo')

                //title
                cy.title().should('include', "Swag")
                .and('eq', "Swag Labs")
                .and('contain', "Labs")

                //mumeros de links
                cy.xpath('//a').should("have.length", "5")

                //Logo nao existente
                cy.geet('aaaaaaaa').should('be.visible')
                .and('exist')

                //Verificar se o valor esta sendo passado corretamente
                cy.get("[placeholder='username']").type('standard_user')
                cy.get("[placeholder='username']").should('have.value', 'standard_user')
            })
            it('Assertion Explicitas', () =>{
                cy.visit("https://www.saucedemo.com/")
                cy.get("[placeholder='Username']").type('standard_user')
                cy.get("[placeholder='Password']").type('secret_sauce')
                cy.xpath('"//*[@id="login-button"]').click()

            })
        })
    })
})