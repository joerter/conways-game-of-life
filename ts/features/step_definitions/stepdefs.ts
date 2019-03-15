import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { asciiToGrid } from "../../game-of-life/ascii-to-grid";

let grid: string[][];

Given("I have supplied the following {string}", function(generation, docString) {
    grid = asciiToGrid(docString);
});

When("I tell the world to evolve once", function() {
});

Then("the next {string} should be", function(generation, docString) {
    return "pending";
});
