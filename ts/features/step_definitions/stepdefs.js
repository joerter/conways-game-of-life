"use strict";
exports.__esModule = true;
var cucumber_1 = require("cucumber");
var chai_1 = require("chai");
var ascii_to_grid_1 = require("../../game-of-life/ascii-to-grid");
var evolve_grid_1 = require("../../game-of-life/evolve-grid");
var grid;
var evolvedGrid;
cucumber_1.Given("I have supplied the following {string}", function (generation, docString) {
    grid = ascii_to_grid_1.asciiToGrid(docString);
    chai_1.expect(grid).to.not.be(null);
});
cucumber_1.When("I tell the world to evolve once", function () {
    evolvedGrid = evolve_grid_1.evolveGrid(grid);
    chai_1.expect(evolvedGrid).to.not.be(null);
});
cucumber_1.Then("the next {string} should be", function (generation, docString) {
    return "pending";
});
