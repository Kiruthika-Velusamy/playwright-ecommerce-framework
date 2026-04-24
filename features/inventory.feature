Feature:Product Sorting
As a customer
I want to navigate to inventory page
So that I can sort products by price and name 

Scenario Outline: Login with valid credentials
Given I am on the login page
When I login with username "<username>" and password "<password>"
Then I should see the inventory page
Examples:
|username|password|
|standard_user|secret_sauce|

Scenario: Sort products by price low to high
Given I am logged in as a valid user
When I sort products by price
Then products should be displayed low to high

Scenario: Sort products by name Z to A
Given I am logged in as a valid user
When I sort products by name
Then products should be displayed Z to A