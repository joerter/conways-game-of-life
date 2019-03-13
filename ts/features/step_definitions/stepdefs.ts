import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { asciiToGrid } from "../../game-of-life/ascii-to-grid";

Given("I have supplied the following {string}", function(generation, docString) {
    asciiToGrid(docString);
});

When("I tell the world to evolve once", function() {
    return "pending";
});

Then("the next {string} should be", function(generation, docString) {
    return "pending";
});
