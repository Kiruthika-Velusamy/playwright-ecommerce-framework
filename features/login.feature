Feature:User Authentication
As a customer
I want to log into the sauce demo website
So that I can buy products
Background:
Given I am on the login page

Scenario Outline: Login with valid credentials
When I login with username "<username>" and password "<password>"
Then I should see the inventory page
Examples:
|username|password|
|standard_user|secret_sauce|

Scenario Outline: Login with invalid credentials
When I login with username "<username>" and password "<password>"
Then I should get user not matched error message
Examples:
|username|password|
|error_user1|secret_sauce|

Scenario Outline: Login with locked out user credentials
When I login with username "<username>" and password "<password>"
Then I should get user has been locked out error message
Examples:
|username|password|
|locked_out_user|secret_sauce|