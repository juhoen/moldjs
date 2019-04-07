var assert = require("chai").assert;
var should = require("chai").should();
var expect = require("chai").expect;
require("../mold");

describe("startsWith", function() {
    it("should be method", function() {
        assert.typeOf(String.prototype.startsWith, "function");
    });

    it("should return boolean", function() {
        assert.typeOf("Hello, world!".startsWith("Hello"), "boolean");
        assert.typeOf("Hello, world!".startsWith("world"), "boolean");
    });

    it("should return correct answer", function() {
        assert.equal("Hello, world!".startsWith("Hello"), true);
        assert.equal("Hello, world!".startsWith("world"), false);
    });

    it("should return correct answer when using indexes", function() {
        assert.equal("Hello, world!".startsWith("Hello", 0), true);
        assert.equal("Hello, world!".startsWith("ello", 1), true);
        assert.equal("Hello, world!".startsWith("Hello", 1), false);
    });

    it("should return correct answer when using outlier indexes", function() {
        assert.equal("Hello, world!".startsWith("Hello", 1000), false);
    });
});

describe("endsWith", function() {
    it("should be method", function() {
        assert.typeOf(String.prototype.endsWith, "function");
    });

    it("should return boolean", function() {
        assert.typeOf("Hello, world!".endsWith("Hello"), "boolean");
        assert.typeOf("Hello, world!".endsWith("world"), "boolean");
    });

    it("should return correct answer", function() {
        assert.equal("Hello, world!".endsWith("Hello"), false);
        assert.equal("Hello, world!".endsWith("world!"), true);
    });

    it("should return correct answer when using indexes", function() {
        assert.equal("Hello, world!".endsWith("world", 0), false);
        assert.equal("Hello, world!".endsWith("world", 1), true);
        assert.equal("Hello, world!".endsWith("world", 2), false);
    });

    it("should return correct answer when using outlier indexes", function() {
        assert.equal("Hello, world!".endsWith("Hello", 1000), false);
    });
});