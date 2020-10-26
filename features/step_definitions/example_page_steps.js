/*
1. Import module from newly created page object file.
2. Import the required keywords from Cucumber.
3. Import the Selector from TestCafe.
*/
const examplePage = require('../support/pages/example_pageObjects.js');
const {Given, When, Then} = require('cucumber');
const { Selector } = require('testcafe');

Given('user navigates to Coosto login page', async function () {
    await testController.navigateTo('https://example.com');
});

When('user enters {string} in the username field', async function (string) {
    const nameField = examplePage.elements.username();
    await testController.typeText(nameField, string);
});
When('user enters {string} in the password field', async function (string) {
    const nameField = examplePage.elements.password();
    await testController.typeText(nameField, string);
});
When('user clicks on Login button', async function () {
    const LoginBtn = examplePage.elements.LoginBtn();  
    await testController.click(LoginBtn);
});
    
Then('{string} module appears', async function (string) {
    const welcomeMessageElement = examplePage.elements.messageElement();
    await testController.expect(welcomeMessageElement.innerText).contains(string);
});