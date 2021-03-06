var assert = require("chai").assert;
var should = require("chai").should();
var expect = require("chai").expect;
require("../mold");

describe("words", function() {
    it("should return array", function() {
        assert.equal(typeof "Hello, world".words(), "object");
        assert.equal(typeof "Hello, world".words().length, "number");
    });

    it("should return words", function() {
        assert.equal(
            "Hello, world!".words().join(","),
            ["Hello", "world"].join(",")
        );
    });
});

describe("camelCase", function() {
    it("should camelCase string", function() {
        assert.equal("Hello world".camelCase(), "helloWorld");
        assert.equal("Hello, world!".camelCase(), "helloWorld");
        assert.equal("Hello   ,world,,!   ".camelCase(), "helloWorld");
        assert.equal("this is so much fun".camelCase(), "thisIsSoMuchFun");
        assert.equal("!!".camelCase(), "");
    });
});

describe("snakeCase", function() {
    it("should snake_case string", function() {
        assert.equal("Hello world".snakeCase(), "hello_world");
        assert.equal("Hello, world!".snakeCase(), "hello_world");
        assert.equal("Hello   ,world,,!   ".snakeCase(), "hello_world");
        assert.equal("this is so much fun".snakeCase(), "this_is_so_much_fun");
        assert.equal("!!".snakeCase(), "");
    });
});

describe("kebabCase", function() {
    it("should kebab-case string", function() {
        assert.equal("Hello world".kebabCase(), "hello-world");
        assert.equal("Hello, world!".kebabCase(), "hello-world");
        assert.equal("Hello   ,world,,!   ".kebabCase(), "hello-world");
        assert.equal("this is so much fun".kebabCase(), "this-is-so-much-fun");
        assert.equal("!!".kebabCase(), "");
    });
});

describe("titleCase", function() {
    it("should Title Case string", function() {
        assert.equal("Hello world".titleCase(), "Hello World");
        assert.equal("Hello, world!".titleCase(), "Hello, World!");
        assert.equal("Hello   ,world,,!   ".titleCase(), "Hello ,world,,!");
        assert.equal("this is so much fun".titleCase(), "This Is So Much Fun");
        assert.equal("!!".titleCase(), "!!");
    });
});

describe("format", function() {
    it("should format string", function() {
        assert.equal("Hello {arg}".format({arg: 'world'}), "Hello world");
        assert.equal("{a} {b}".format({a: 'Hello', b: 'world'}), "Hello world");
        assert.equal("{} {}".format('Hello', 'world'), "Hello world");
    });
});

describe("linkify", function() {
    it("should linkify string", function() {
        assert.equal("john.doe@example.com".linkify(), '<a href="mailto:john.doe@example.com">john.doe@example.com</a>');
        assert.equal("www.google.com".linkify(), '<a href="http://www.google.com" target="_blank">www.google.com</a>');
        assert.equal("https://google.com".linkify(), '<a href="https://google.com" target="_blank">https://google.com</a>');
        assert.equal("https://google.com".linkify("_top"), '<a href="https://google.com" target="_top">https://google.com</a>');
    });
});

describe("stripTags", function() {
    it("should strip tags", function() {
        assert.equal('<div>This is <b style="color: red;">HTML</b></div>'.stripTags(), "This is HTML");
        assert.equal('Test<code>123</code>'.stripTags(), "Test123");
    });
});