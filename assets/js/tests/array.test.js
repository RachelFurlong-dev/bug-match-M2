const cardArray = require("../script");
test("checks if an array of objects contains a specific value", () => {
	const expectedValue = {
		name: 'robot 1',
		img: 'assets/img/alien-insect-robot.png',
	};
	expect(cardArray).toContainEqual(expectedValue);
});