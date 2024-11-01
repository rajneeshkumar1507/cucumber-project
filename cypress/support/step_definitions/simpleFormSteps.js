import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
Given('open browser enter simpleform url', () => {
  cy.visit('https://v1.training-support.net/selenium/simple-form');
});
When('user enters firstname, lastname, email, contact', () => {
  cy.get('#firstName').type('Garima');
  cy.get('#lastName').type('Singh');
  cy.get('#email').type('testuser5@gmail.com');
  cy.get('#number').type('9874563210');
});
And('user clicks on submit', () => {
  cy.get('input[type="submit"]').click();
});
Then('successful alert should be displayed with a message', () =>{
  cy.on('window:alert', (text) => {
    expect(text).to.contains('Thank you for your submission');
  });
});