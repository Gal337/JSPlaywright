Feature: Ecommerce2 Error validations
  @Validations
  Scenario: Placing the order
    Given user logs in to Ecommerce2 application with "4testing@gmail.com" and "Abc!2345"
    Then verify that error message is visible

  Scenario Outline: Scenario Outline name
    Given user logs in to Ecommerce2 application with "<username>" and "<password>"
    Then verify that error message is visible

    Examples:
        | username             | password  |
        | 4testing2@gmail.com  | Abc!2345  |
        | 4testing@gmail.com   | Abc!2345  |
        | something@gmail.com  | wrong     |
