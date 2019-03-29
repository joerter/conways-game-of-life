import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { asciiToGrid } from "../../game-of-life/ascii-to-grid";

let grid: string[][];

Given("I have supplied the following {string}", function(generation, docString) {
    grid = asciiToGrid(docString);

    const lineCount = docString.split("\n").length;
    expect(grid.length).to.equal(lineCount);
});

When("I tell the world to evolve once", function() {
    return "pending";
});

Then("the next {string} should be", function(generation, docString) {
    return "pending";
});
