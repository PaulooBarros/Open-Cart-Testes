Cypress.Commands.add('RetornaSucessoLoginDadosValidos',()=>{
    cy.get('#input-email').type('Esta60@yahoo.com')

    cy.get('#input-password').type('123456')

    cy.get('#form-login > .text-end > .btn').click()

    cy.contains('Edit your account information ').should('be.visible') // Conferindo se a opção de edição de conta é visível
})

Cypress.Commands.add('RetornaErroAposLoginComSenhaIncorreta',()=>{
    cy.get('#input-email').type('Jessi6@gmail.com')

    cy.get('#input-password').type('senhaErrada') // senha incorreta

    cy.get('#form-login > .text-end > .btn').click()

    cy.get('.alert').should('be.visible')
})

Cypress.Commands.add('RetornaErroAposLoginComUsuarioInexistente',()=>{
    cy.get('#input-email').type('usuarioIncorreto@gmail.com')

    cy.get('#input-password').type('123456')

    cy.get('#form-login > .text-end > .btn').click()

    cy.get('.alert').should('be.visible')
})

Cypress.Commands.add('RetornaErroAposLoginComCamposVazios', ()=>{
    cy.get('#form-login > .text-end > .btn').click()

    cy.get('.alert').should('be.visible')
})

Cypress.Commands.add('RetornaErroAposLoginComUsuarioVazio', ()=>{
    
    cy.get('#input-password').type('123456')

    cy.get('#form-login > .text-end > .btn').click()

    cy.get('.alert').should('be.visible')
})

Cypress.Commands.add('RetornaErroAposLoginComSenhaVazia',()=>{
    cy.get('#input-email').type('Jessi6@gmail.com')

    cy.get('#form-login > .text-end > .btn').click()

    cy.get('.alert').should('be.visible')
})