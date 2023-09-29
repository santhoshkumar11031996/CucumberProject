Feature: this feature is to test the loginpage scenarios.


Scenario Outline: this Scenario is to test loginpage functionality.

Given Lunch browser and load Url
When provide valid "<username>" and "<password>" later hit login
Then Validate the user and close browser 


Examples: 
 |username|password|
 |santhosh@gmail.com|hello123|
 |kumar@email.com|hai011|