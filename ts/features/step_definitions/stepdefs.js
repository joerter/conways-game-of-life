"use strict";
exports.__esModule = true;
var cucumber_1 = require("cucumber");
var chai_1 = require("chai");
function isItFriday(today) {
    return 'Nope';
}
cucumber_1.Given('today is Sunday', function () {
    this.today = 'Sunday';
});
cucumber_1.When("I ask whether it's Friday yet", function () {
    this.actualAnswer = isItFriday(this.today);
});
cucumber_1.Then('I should be told {string}', function (expectedAnswer) {
    chai_1.expect(this.actualAnswer).to.equal(expectedAnswer);
});
