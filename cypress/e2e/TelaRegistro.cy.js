const { generateRandomEmail } = require('../support/utils');

describe('Testes de Registro', () => {
  
  beforeEach('Deve visitar a página de login', () => {
    cy.visit('/en-gb?route=account/register')
  });

  it("Retorna Sucesso ao Realizar login", ()=>{
    cy.RetornaSucessoAoFazerRegistroComDadosValidos()
  })

  it("Retorna Erro ao Realizar Login com email já cadastrado", ()=>{
    cy.RetornaErroAoRegistrarComEmailJaUsado()
  })

  it("Retorna Erro ao Realizar Registro com Senha em branco", ()=>{
    cy.RetornaErroAoRegistrarComSenhaEmBranco()
  })

  it("Retorna Erro ao Registrar com Nome em Branco",()=>{
    cy.RetornaErroAoRegistrarComNomeEmBranco()
  })
  it("Retorna Erro ao Registrar com SobreNome em branco",()=>{
    cy.RetornaErroAoRegistrarComSobreNomeEmBranco()
  })

  it("Retorna Erro ao Registrar com Email em Branco",()=>{
    cy.RetornaErroAoRegistrarComEmailEmBranco()
  })

  it("Teste de integração com a página de login", ()=>{
    cy.get('.list-group > [href="https://demo.opencart.com/en-gb?route=account/login"]').click()

    cy.url().should('be.equal','https://demo.opencart.com/en-gb?route=account/login' )
  
  })

});
