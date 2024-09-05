const { defineConfig } = require("cypress");
require('dotenv').config(); // Carregar variáveis de ambiente

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Você pode adicionar ouvintes de eventos Node aqui, se necessário
      // Por exemplo, você pode adicionar tarefas personalizadas ou interceptar eventos
      return config;
    },
    baseUrl: process.env.BASE_URL, // Definindo a baseUrl a partir da variável de ambiente
    viewportWidth: 1280, // Largura da viewport
    viewportHeight: 720, // Altura da viewport
  },
});
