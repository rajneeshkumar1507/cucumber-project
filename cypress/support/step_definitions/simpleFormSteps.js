import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
Given('open browser enter simpleform url', () => {
  cy.visit('https://v1.training-support.net/selenium/simple-form');
});
When('user enters firstname, lastname, email, contact', () => {
  cy.get('#firstName').type('Rajneesh');
  cy.get('#lastName').type('Kumar');
  cy.get('#email').type('testuser1@gmail.com');
  cy.get('#number').type('7569335977');
});
And('user clicks on submit', () => {
  cy.get('input[type="submit"]').click();
});
Then('successful alert should be displayed with a message', () =>{
  cy.on('window:alert', (text) => {
    expect(text).to.contains('Thank you for your submission');
  });
});