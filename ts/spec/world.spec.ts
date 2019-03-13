import { World } from "../game-of-life/world";

describe("World", () => {
    it("should parse the ascii world into an array", () => {
        const asciiWorld = "---\n---\n---";

        const world = new World();
        world.initialize(asciiWorld);

        expect(world.worldGrid).toEqual([["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]]);
    });
});
