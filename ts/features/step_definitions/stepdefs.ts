import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { World } from "../../game-of-life/world";

Given("I have supplied the following {string}", function(
    generation,
    docString
) {
    console.log(docString);
    const world = new World();
    world.initialize(docString);
});

When("I tell the world to evolve once", function() {
    return "pending";
});

Then("the next {string} should be", function(generation, docString) {
    return "pending";
});
