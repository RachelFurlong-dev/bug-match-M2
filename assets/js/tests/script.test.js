const cardArray = require("../script");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

//testing the array of objects cardArray

describe("test array of objects", () => {

test("checks if an array of objects contains a specific value", () => {
	const expectedValue = {
		name: 'robot 1',
		img: 'assets/img/alien-insect-robot.png',
	};
	expect(cardArray).toContainEqual(expectedValue);
});

test("checks if an array of objects contains a specific object", () => {
	const obj = { name: 'robot 6', 
    img: 'assets/img/pink-insect-robot.png' };
  expect(cardArray).toContainEqual(obj);
});
});

//testing elements eist in the DOM

describe("DOM tests", () => {
	test("h3 should exist", () => {
        expect(document.getElementsByTagName("h3").length).toBe(1);
    });

    test("should be two buttons exist in game", () => {
        expect(document.getElementsByTagName("button").length).toBe(2);
    });

});