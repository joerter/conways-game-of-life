import { asciiToGrid } from "../game-of-life/ascii-to-grid";

describe("asciiToGrid", () => {
    it("should parse the ascii world into an array", () => {
        const line1 = "---\n";
        const line2 = "---\n";
        const line3 = "---";

        const expected = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];

        const actual = asciiToGrid(`${line1}${line2}${line3}`);

        expect(actual).toEqual(expected);
    });
});
