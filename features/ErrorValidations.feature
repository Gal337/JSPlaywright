Feature: Ecommerce2 Error validations
  @Validations
  Scenario: Placing the order
    Given user logs in to Ecommerce2 application with "4testing@gmail.com" and "Abc!2345"
    Then verify that error message is
