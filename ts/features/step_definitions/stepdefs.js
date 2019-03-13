"use strict";
exports.__esModule = true;
var cucumber_1 = require("cucumber");
var world_1 = require("../../game-of-life/world");
cucumber_1.Given("I have supplied the following {string}", function (generation, docString) {
    console.log(docString);
    var world = new world_1.World();
    world.initialize(docString);
});
cucumber_1.When("I tell the world to evolve once", function () {
    return "pending";
});
cucumber_1.Then("the next {string} should be", function (generation, docString) {
    return "pending";
});
