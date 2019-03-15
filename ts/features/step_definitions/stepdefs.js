"use strict";
exports.__esModule = true;
var cucumber_1 = require("cucumber");
var ascii_to_grid_1 = require("../../game-of-life/ascii-to-grid");
var grid;
cucumber_1.Given("I have supplied the following {string}", function (generation, docString) {
    grid = ascii_to_grid_1.asciiToGrid(docString);
});
cucumber_1.When("I tell the world to evolve once", function () {
});
cucumber_1.Then("the next {string} should be", function (generation, docString) {
    return "pending";
});
