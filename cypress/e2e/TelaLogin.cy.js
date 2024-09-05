describe('Testes de Login', () => {
  beforeEach('Deve visitar a página de login', () => {
    cy.visit('/en-gb?route=account/login')
  });
  
  it('Retorna Sucesso Após Login com Dados Válidos', () => {
    cy.RetornaSucessoLoginDadosValidos()
  })

  it('Retorna Erro Após Login com Senha Inválida', ()=>{
    cy.RetornaErroAposLoginComSenhaIncorreta()
  })

  it('Retorna Erro Após Login com Usuário Inválido', ()=>{
    cy.RetornaErroAposLoginComUsuarioInexistente()
  })

  it('Retorna erro após login com campos vazios', ()=>{
    cy.RetornaErroAposLoginComCamposVazios()
  })

  it('Retorna Erro após login com Usuario vazio', ()=>{
    cy.RetornaErroAposLoginComUsuarioVazio()
  })

  it('Retorna Erro Após Login com Senha Vazia',()=>{
    cy.RetornaErroAposLoginComSenhaVazia()
  })
})