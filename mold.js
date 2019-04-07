/**
 * JavaScript build-in string object
 * @class String
 */

// QUERYING

String.prototype.startsWith = function(query, index) {
	index = index || 0;
	return this.indexOf(query) === index;
};

String.prototype.endsWith = function(query, index) {
	index = index || 0;
	return this.indexOf(query) === this.length - query.length - index;
};

// MANIPULATING

/**
 * Strips string
 * @return {string} Stripped string
 * @function
 */
String.prototype.strip = function() {
	return this.replace(/[\W_\s]+/g, " ").trim();
};

String.prototype.parts = function() {
	return this.trim().split(/\s+/);
};

String.prototype.words = function() {
	return this.strip().split(/\s+/);
};

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.decapitalize = function() {
	return this.charAt(0).toLowerCase() + this.slice(1);
};

String.prototype.camelCase = function() {
	var words = this.words().map(word => word.capitalize());
	return words.join("").decapitalize();
};

String.prototype.snakeCase = function() {
	var words = this.words().map(word => word.toLowerCase());
	return words.join("_");
};

String.prototype.kebabCase = function() {
	var words = this.words().map(word => word.toLowerCase());
	return words.join("-");
};

String.prototype.titleCase = function() {
	var words = this.parts().map(word => word.capitalize());
	return words.join(" ");
};

String.prototype.format = function() {
	var copy = this + "";
	var args = [].slice.call(arguments);

	// Case: Unpositional formatting
	if (typeof args[0] === "object") {
		args = args[0];
		keys = Object.keys(args);

		keys.forEach(key => {
			var search = new RegExp("{" + key + "}", "g");
			copy = copy.replace(search, args[key]);
		});
	}

	// Case: Positional formatting
	else {
		args.forEach(arg => {
			copy = copy.replace(/{[A-Z0-9]*}/i, arg);
		});
	}

	return copy;
};
