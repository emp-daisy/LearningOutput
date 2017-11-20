import {
    assert
} from 'chai';
import {
    wordCount
} from '../src/wordcount.js';

describe('wordcount', function () {
    describe('valid input', function () {
        it('should return a dictionary with the words and their count values', function () {
            assert.deepEqual(wordCount("olly olly in come free"), {
                'olly': 2,
                'in': 1,
                'come': 1,
                'free': 1
            });
        });
        it('should return a dictionary without space key', function () {
            assert.deepEqual(wordCount("olly   olly in come free"), {
                'olly': 2,
                'in': 1,
                'come': 1,
                'free': 1
            });
        });
        it('should return a dictionary with all lowercases', function () {
            assert.deepEqual(wordCount("olly   oLLy in come FRee"), {
                'olly': 2,
                'in': 1,
                'come': 1,
                'free': 1
            });
        });
    });

    describe('Non-String invalid input', function () {
        it('should return a an error message', function () {
            assert.deepEqual(wordCount(123145), "Invalid input");
        });

        it('should return a an error message', function () {
            assert.deepEqual(wordCount(new Object()), "Invalid input");
        });

        it('should return a an error message', function () {
            assert.deepEqual(wordCount([12, 31, 45]), "Invalid input");
        });

        it('should return a an error message', function () {
            assert.deepEqual(wordCount({
                'key': 123145
            }), "Invalid input");
        });

        it('should return a an error message', function () {
            assert.deepEqual(wordCount(true), "Invalid input");
        });
        it('should return a an error message', function () {
            assert.deepEqual(wordCount(), "Invalid input");
        });
    });
});