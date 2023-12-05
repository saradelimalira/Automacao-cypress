describe("CSSLocators", () => {

        beforeEach(() => {
                cy.visit('https://www.saucedemo.com/')
                cy.get("#user-name").type("standard_user")
                cy.get("#password").type("secret_sauce")
                cy.get(".submit-button.btn_action").click()
        })

        it("Login Válido", () => {
                // Verificar se está na página de inventário
                cy.get("#header_container span").should('contain', 'Products')
        })

        it('XPath', () => {
                // Clicar em um elemento usando XPath
                cy.xpath('//*[@id="add-to-cart-sauce-labs-backpack"]').click()

                // Verificar se o botão "Remove" está presente
                cy.xpath('//*[@id="remove-sauce-labs-backpack"]').should('contain', 'Remove')
        })
})