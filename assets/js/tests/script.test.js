const { describe } = require("yargs");
const { theFunctionName } = require("../script");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("showScore is working correctly", () => {

})
