"use strict";
exports.__esModule = true;
var World = /** @class */ (function () {
    function World() {
        this.worldGrid = [];
    }
    World.prototype.initialize = function (docString) {
        this.worldGrid = [];
        var linesArray = docString.split("\n");
        for (var i = 0; i < linesArray.length; i++) {
            this.worldGrid.push(Array.from(linesArray[i]));
        }
    };
    World.prototype.testMethod = function (docString) { };
    return World;
}());
exports.World = World;
