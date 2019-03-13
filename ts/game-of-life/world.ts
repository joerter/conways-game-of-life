export class World {
    worldGrid: string[][] = [];

    initialize(docString: string) {
        this.worldGrid = [];

        const linesArray = docString.split("\n");

        for (let i = 0; i < linesArray.length; i++) {
            // TODO: need to change from array.from since not supported
            this.worldGrid.push(Array.from(linesArray[i]));
        }
    }

    testMethod(docString: string) {}
}
