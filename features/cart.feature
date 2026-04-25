Feature:Adding items to Cart
As a customer
I want to add/remove items to Cart
So that I can buy products

Scenario Outline: Login with valid credentials
When I login with username "<username>" and password "<password>"
Then I should see the inventory page
Examples:
|username|password|
|standard_user|secret_sauce|

Scenario Outline: Add single item to Cart
When I logged in as a valid user username "<username>" and password "<password>"
Then I should be able to add single item to Cart
Examples:
|username|password|
|standard_user|secret_sauce|


Scenario Outline: Add multiple item to Cart
When I logged in as a valid user username "<username>" and password "<password>"
Then I should be able to add multiple item to Cart
Examples:
|username|password|
|standard_user|secret_sauce|


Scenario Outline: Remove item from Cart
When I logged in as a valid user username "<username>" and password "<password>"
Then I should be able to remove item from a cart
Examples:
|username|password|
|standard_user|secret_sauce|
