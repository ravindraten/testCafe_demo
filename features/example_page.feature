# Add your test scenarios in the Cucumber Feature file.
Feature: Login to Coosto and Navigate to Publish
Scenario: User goes to Publish
   Given user navigates to Coosto login page
   When user enters "xxx" in the username field
   And user enters "xxx" in the password field
   When user clicks on Login button
   Then "Content Calendar" module appears