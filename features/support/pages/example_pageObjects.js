const {Selector} = require('testcafe');

/*
Create and export a module with name "elements". This module contains functions.
Each function is returning a Selector for a particular web element and bind to testController.
This module can be imported and called from Step Definitions to access the web elements.
*/

exports.elements = {

    username: function() {
        return Selector('#username').with({ boundTestRun: testController });
    },
    password: function() {
        return Selector('#password').with({ boundTestRun: testController });
    },
    LoginBtn: function() {
        return Selector('.form__footer .primary').with({ boundTestRun: testController });
    },
    messageElement: function() {
        return Selector('.title-header').with({ boundTestRun: testController });
    }
}