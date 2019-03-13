export class World {
    worldGrid: string[][] = [];

    initialize(asciiWorld: string) {
        this.worldGrid = [];

        const lines = asciiWorld.split("\n");

        for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
            const line = lines[lineIndex];
            this.worldGrid.push([]);

            for (let cellIndex = 0; cellIndex < line.length; cellIndex++) {
                const cell = line[cellIndex];
                this.worldGrid[lineIndex].push(cell);
            }
        }
    }
}
