const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
	// throw new NotImplementedError('Not implemented');

	if (date === "no-value") return "Unable to determine the time of year!";

	if (date instanceof Date) {
		if (Object.prototype.toString.call(date) !== "[object Date]")
			throw new Error("Caught fake date!");

		const month = date.getMonth();
		if (date.getMonth() === 0) return "winter";
		else if (month === 1) return "winter";
		else if (month === 3) return "spring";
		else if (month === 2) return "spring";
		else if (month === 4) return "spring";
		else if (month === 5) return "summer";
		else if (month === 6) return "summer";
		else if (month === 7) return "summer";
		else if (month === 8) return "autumn";
		else if (month === 9) return "autumn";
		else if (month === 10) return "autumn";
		else if (month === 11) return "winter";
	} else {
		return "Invalid date!";
	}

	// remove line with error and write your code here
}

module.exports = {
	getSeason,
};
