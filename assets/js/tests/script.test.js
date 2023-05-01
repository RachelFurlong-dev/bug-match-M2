const { game } = require("../script");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("gameScore key exists", () => {
        expect("gameScore" in game).toBe(true);
    });
});