const assert = require('chai').assert;
const countApp = require('../src/wordcount.js');

describe('wordcount', function () {
    describe('valid input', function () {
        it('should return a dictionary with the words and their count values', function () {
            assert.deepEqual(countApp.wordCount("olly olly in come free"), {
                'olly': 2,
                'in': 1,
                'come': 1,
                'free': 1
            });
        });
        it('should return a dictionary without space key', function () {
            assert.deepEqual(countApp.wordCount("olly   olly in come free"), {
                'olly': 2,
                'in': 1,
                'come': 1,
                'free': 1
            });
        });
    });

    describe('Non-String invalid input', function () {
        it('should return a an error message', function () {
            assert.deepEqual(countApp.wordCount(123145), "Invalid input");
        });
    });
});