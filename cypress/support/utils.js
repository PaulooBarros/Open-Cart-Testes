// cypress/support/utils.js
const faker = require('faker');

function generateRandomEmail() {
  return faker.internet.email();
}

module.exports = {
  generateRandomEmail,
};
