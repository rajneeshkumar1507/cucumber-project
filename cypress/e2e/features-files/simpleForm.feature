Feature: Simple form
  Scenario: To verify the form is working for all mandatory fields
    Given open browser enter simpleform url
    When user enters firstname, lastname, email, contact
    And user clicks on submit
    Then successful alert should be displayed with a message