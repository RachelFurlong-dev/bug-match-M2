const cardArray = require("../script");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("test array of objects", () => {
test("checks if an array of objects contains a specific value", () => {
	const expectedValue = {
		name: 'robot 1',
		img: 'assets/img/alien-insect-robot.png',
	};
	expect(cardArray).toContainEqual(expectedValue);
});
});//end tag describe

describe("DOM tests", () => {
	test("h3 should exist", () => {
        expect(document.getElementsByTagName("h3").length).toBe(1);
    });

});//end tag describe

