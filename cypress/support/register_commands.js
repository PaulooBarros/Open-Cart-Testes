const { generateRandomEmail } = require('./utils');
const randomEmail = generateRandomEmail();
Cypress.Commands.add('RetornaSucessoAoFazerRegistroComDadosValidos', ()=>{
    cy.get('#input-firstname')
    .type('TESTE-NOME')
    .should('have.value','TESTE-NOME')
    
    cy.get('#input-lastname')
    .type('TESTE-SOBRENOME')
    .should('have.value','TESTE-SOBRENOME')
    
    cy.get('#input-email').type(randomEmail)
    
    cy.get('#input-password').type('123456' )
    
    cy.get('#input-newsletter').click()
    
    cy.get('.text-end > .form-check > .form-check-input').click()
    
    cy.get('.text-end > .btn').click()

    cy.contains('Your Account Has Been Created!').should('be.visible')
})

Cypress.Commands.add('RetornaErroAoRegistrarComEmailJaUsado', ()=>{
    cy.get('#input-firstname')
    .type('TESTE-NOME')
    .should('have.value','TESTE-NOME')

    cy.get('#input-lastname')
    .type('TESTE-SOBRENOME')
    .should('have.value','TESTE-SOBRENOME')

    cy.get('#input-email').type('Jessi6@gmail.com') //Email cadastrado como base para testes!

    cy.get('#input-password').type('123456')

    cy.get('.text-end > .form-check > .form-check-input').click()
    
    cy.get('.text-end > .btn').click()

    cy.contains('Warning: E-Mail Address is already registered!').should('be.visible')
})

Cypress.Commands.add("RetornaErroAoRegistrarComSenhaEmBranco",()=>{

    cy.get('#input-firstname')
    .type('TESTE-NOME')
    .should('have.value','TESTE-NOME')

    cy.get('#input-lastname')
    .type('TESTE-SOBRENOME')
    .should('have.value','TESTE-SOBRENOME')

    cy.get('#input-email').type(randomEmail)


    cy.get('.text-end > .form-check > .form-check-input').click()
    
    cy.get('.text-end > .btn').click()

    cy.get('#error-password').should('be.visible')
})

Cypress.Commands.add("RetornaErroAoRegistrarComNomeEmBranco",()=>{
    cy.get('#input-lastname')
    .type('TESTE-SOBRENOME')
    .should('have.value','TESTE-SOBRENOME')

    cy.get('#input-email').type(randomEmail)

    cy.get('#input-password').type('123456')

    cy.get('.text-end > .form-check > .form-check-input').click()
    
    cy.get('.text-end > .btn').click()

    cy.get('#error-firstname').should('be.visible')

})

Cypress.Commands.add("RetornaErroAoRegistrarComSobreNomeEmBranco",()=>{
    cy.get('#input-firstname')
    .type('TESTE-NOME')
    .should('have.value','TESTE-NOME')

    cy.get('#input-email').type(randomEmail)

    cy.get('#input-password').type('123456')

    cy.get('.text-end > .form-check > .form-check-input').click()
    
    cy.get('.text-end > .btn').click()

    cy.get('#error-lastname').should('be.visible')

})

Cypress.Commands.add("RetornaErroAoRegistrarComEmailEmBranco",()=>{
    cy.get('#input-firstname')
    .type('TESTE-NOME')
    .should('have.value','TESTE-NOME')

    cy.get('#input-lastname')
    .type('TESTE-SOBRENOME')
    .should('have.value','TESTE-SOBRENOME')

    cy.get('#input-password').type('123456')

    cy.get('.text-end > .form-check > .form-check-input').click()
    
    cy.get('.text-end > .btn').click()

    cy.get('#error-email').should('be.visible')

})