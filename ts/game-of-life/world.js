"use strict";
exports.__esModule = true;
var World = /** @class */ (function () {
    function World() {
        this.worldGrid = [];
    }
    World.prototype.initialize = function (asciiWorld) {
        this.worldGrid = [];
        var lines = asciiWorld.split("\n");
        for (var lineIndex = 0; lineIndex < lines.length; lineIndex++) {
            var line = lines[lineIndex];
            this.worldGrid.push([]);
            for (var cellIndex = 0; cellIndex < line.length; cellIndex++) {
                var cell = line[cellIndex];
                this.worldGrid[lineIndex].push(cell);
            }
        }
    };
    return World;
}());
exports.World = World;
