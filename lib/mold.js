/**
 * JavaScript build-in string object
 * @name String
 */


/**
 * Determines whether a string begins with the characters of a specified string.
 *
 * @param {string} query Specified string
 * @param {int} [index=0] Index determines where to start lookup
 *
 * @example
 * "Hello, world!".startsWith("Hello");  // true
 *
 * @return {boolean} Boolean output
 * @method
 */
String.prototype.startsWith = function(query, index) {
    index = index || 0;
    return this.indexOf(query) === index;
};


/**
 * Determines whether a string ends with the characters of a specified string.
 *
 * @param {string} query Specified string
 * @param {int} [index=0] Index determines where to start lookup counted from the end of the string
 *
 * @example
 * "Hello, world!".endsWith("world!");  // true
 *
 * @return {boolean} Boolean output
 * @method
 */
String.prototype.endsWith = function(query, index) {
    index = index || 0;
    return this.indexOf(query) === this.length - query.length - index;
};

/**
 * Strips all non-word or non-whitespace characters from the string.
 *
 * @example
 * "Hello, world!".strip();  // "Hello world"
 *
 * @return {string} Stripped string
 * @method
 */
String.prototype.strip = function() {
    return this.replace(/[\W_\s]+/img, " ").trim();
};

/**
 * Splits string by the whitespace
 *
 * @example
 * "Hello, world!".parts();  // ["Hello,", "world!"]
 *
 * @return {string[]} Stripped string
 * @method
 */
String.prototype.parts = function() {
    return this.trim().split(/\s+/);
};

/**
 * Extracts words from the string
 *
 * @example
 * "Hello, world!".words();  // ["Hello", "world"]
 *
 * @return {string[]} Extracted words
 * @method
 */
String.prototype.words = function() {
    return this.strip().split(/\s+/);
};

/**
 * Capitalizes first letter of the string
 *
 * @param {boolean} lowerRest
 * Lowercase rest of the string if <code>true</code>
 *
 * @example
 * "hello World".capitalize();      // "Hello World"
 * "hello world".capitalize(true);  // "Hello world"
 *
 * @return {string} Capitalized string
 * @method
 */
String.prototype.capitalize = function(lowerRest) {
    var head = this.charAt(0).toUpperCase();
    var tail = this.slice(1);
    return head + (lowerRest ? tail.toLowerCase() : tail);
};

/**
 * Decapitalizes first letter of the string
 *
 * @param {boolean} lowerRest
 * Lowercase rest of the string if <code>true</code>
 *
 * @example
 * "Hello World".capitalize();  // "hello World"
 *
 * @return {string} Decapitalized string
 * @method
 */
String.prototype.decapitalize = function(upperRest) {
    var head = this.charAt(0).toLowerCase();
    var tail = this.slice(1);
    return head + (upperRest ? tail.toUpperCase() : tail);
};

/**
 * Converts the string to camelCased.
 *
 * @param {boolean} upperRest
 * Uppercase rest of the string if <code>true</code>
 *
 * @example
 * "Hello World".camelCase();    // "helloWorld"
 * "Hello, World!".camelCase();  // "helloWorld"
 *
 * @return {string} camelCased string
 * @method
 */
String.prototype.camelCase = function() {
    var words = this.words().map(word => word.capitalize());
    return words.join("").decapitalize();
};

/**
 * Converts the string to snake_case.
 *
 * @example
 * "Hello World".snakeCase();    // "hello_world"
 * "Hello, World!".snakeCase();  // "hello_world"
 *
 * @return {string} snake_cased string
 * @method
 */
String.prototype.snakeCase = function() {
    var words = this.words().map(word => word.toLowerCase());
    return words.join("_");
};

/**
 * Converts the string to kebab-case.
 *
 * @example
 * "Hello World".kebabCase();    // "hello-world"
 * "Hello, World!".kebabCase();  // "hello-world"
 *
 * @return {string} kebab-cased string
 * @method
 */
String.prototype.kebabCase = function() {
    var words = this.words().map(word => word.toLowerCase());
    return words.join("-");
};

/**
 * Converts the string to Title Case.
 *
 * @example
 * "hello world".titleCase();    // "Hello World"
 * "hello, world!".titleCase();  // "Hello, World!"
 *
 * @return {string} kebab-cased string
 * @method
 */
String.prototype.titleCase = function() {
    var words = this.parts().map(word => word.capitalize());
    return words.join(" ");
};

/**
 * String formatting function. Can be used with object or positional arguments.
 *
 * @param {object|...string} arguments Positional or unpositional arguments
 *
 * @example
 * // Unpositional named arguments
 * "rgb({r}, {g}, {b})".format({r: 10, g: 20, b: 30});  // "rbg(10, 20, 30)"
 *
 * // Positional named arguments
 * "rgb({r}, {g}, {b})".format(10, 20, 30);             // "rbg(10, 20, 30)"
 *
 * // Positional arguments
 * "rgb({}, {}, {})".format(10, 20, 30);                // "rbg(10, 20, 30)"
 *
 * @return {string} kebab-cased string
 * @method
 */
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
            copy = copy.replace(/{[\w]*}/i, arg);
        });
    }

    return copy;
};

/**
 * String linkify function. Replaces text links with HTML links.
 *
 * @param {string} [target="_blank"]
 * Specifies where to open link. Options are "_target", "_self", "_parent", "_top" or name of the frame. 
 *
 * @example
 * "My email address is john@doe.com".linkify();
 * // "My email address is <a ref="mailto:john@doe.com" target="_blank">john@doe.com</a>"
 *
 * "This is link to google: www.google.com".linkify();
 * // "This is link to google: <a ref="http://www.google.com" target="_blank">www.google.com</a>"
 *
 * @return {string} linkified string
 * @method
 */
String.prototype.linkify = function(target) {
    // This function was inspired by StackOverflow answer
    // Check it out: https://stackoverflow.com/a/2166104

    target = target || "_blank";
    return this

        // Starting with http://, https://, or ftp://
        .replace(/(\b(https?|ftp):\/\/[-\w+&@#\/%?=~_|!:,.;]*[-\w+&@#\/%=~_|])/img, '<a href="$1" target="{target}">$1</a>'.format(target))

        // Starting with "www." (without // before it, or it'd re-link the ones done above).
        .replace(/(^|[^\/])(www\.[\S]+(\b|$))/img, '$1<a href="http://$2" target="{target}">$2</a>'.format(target))

        // Change email addresses to mailto-links.
        .replace(/(([\w\-\_\.])+@[a-z\_]+?(\.[a-z]{2,6})+)/img, '<a href="mailto:$1">$1</a>')
};

/**
 * Strips all HTML tags from the string
 *
 * @example
 * '<div>This is <b style="color: red;">HTML</b></div>'.stripTags();
 * // "This is HTML"
 *
 * @return {string} Stripped string
 * @method
 */
String.prototype.stripTags = function() {
    return this.replace(/<\/?.*?>/img, '')
}
