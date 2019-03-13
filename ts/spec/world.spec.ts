import { World } from "../game-of-life/world";

describe("World", () => {
    it("should parse the ascii world into an array", () => {
        const asciiWorld = "yo yo";
        // `---\n
        // ---\n
        // ---\n`;

        console.log(asciiWorld);

        const world = new World();
        world.initialize(asciiWorld);

        console.log(world.linesArray);
        console.log(world.docString);

        expect(world.docString).toEqual("The End");
        // expect(world.worldGrid).toEqual([
        //     ["-", "-", "-"],
        //     ["-", "-", "-"],
        //     ["-", "-", "-"]
        // ]);
    });
});
