const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer.js');

describe('fizzBuzzer', function () {
    it('should return fizz, buzz or fizz-buzz depending on if the num is divisible by 3, 5 or both', function () {
        const normalCases = [
            {num: 15, expected: 'fizz-buzz'},
            {num: 30, expected: 'fizz-buzz'},
            {num: 45, expected: 'fizz-buzz'},
            {num: 5, expected: 'buzz'},
            {num: 10, expected: 'buzz'},
            {num: 20, expected: 'buzz'},
            {num: 3, expected: 'fizz'},
            {num: 6, expected: 'fizz'},
            {num: 9, expected: 'fizz'}
        ];
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
        });
    });

    it('should raise an error if num is non-numeric', function () {
        const badInputs = [
            ['a'],
            [false],
            ['1']
        ];
        badInputs.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input[0]);
            }).to.throw(Error);
        });
    });
});