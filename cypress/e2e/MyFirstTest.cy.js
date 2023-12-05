describe('verificacao de titulo da pagina', () => {

  it('TC1 - Verificar o titulo da pagina - Positivo', () => {

    cy.visit('https://www.saucedemo.com/')
    cy.title().should('eq', 'Swag Labs')
  })
  it('TC2 - Verificar o titulo da pagina - Negativo', () => {

    cy.visit('https://www.saucedemo.com/')
    cy.title().should('eq', 'swag labs')
  })

})