Feature:Place order
As a customer
I want to navigate to inventory page
So that I can place order and logout successfully

Scenario Outline: Login with valid credentials
Given I am on the login page
When I login with username "<username>" and password "<password>"
Then I should see the inventory page
Examples:
|username|password|
|standard_user|secret_sauce|

Scenario: Add item to cart and place order
Given I logged in as a valid user username "<username>" and password "<password>"
When I add items to cart
Then I should place order successfully
Examples:
|username|password|
|standard_user|secret_sauce|

Scenario: Logout successfully
Given I logged in as a valid user username "<username>" and password "<password>"
When I logout
Then I back to login page and I should see the url "<url>"
Examples:
|username|password|url|
|standard_user|secret_sauce| https://www.saucedemo.com/|