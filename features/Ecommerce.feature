Feature: Ecommerce validations

  Scenario: Placing the order
    Given user logs in to Ecommerce application with "4testing@gmail.com" and "Abc!2345"
    When add "iphone 13 pro" to cart
    Then verify "iphone 13 pro" is displayed in the cart
    When enter valid details and place the order
    Then verify order is present in OrderHistory
