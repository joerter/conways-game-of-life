"use strict";
exports.__esModule = true;
var world_1 = require("../game-of-life/world");
describe("World", function () {
    it("should parse the ascii world into an array", function () {
        var asciiWorld = "---\n---\n---";
        var world = new world_1.World();
        world.initialize(asciiWorld);
        expect(world.worldGrid).toEqual([["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]]);
    });
});
