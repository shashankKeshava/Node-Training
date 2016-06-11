var assert = require('assert');

var expected, current;

before(function() {
    expected = ['a', 'b', 'c'];
});

describe('String#split #1', function() {
    beforeEach(function() {
        current = 'a,b,c'.split(',');
    });

    it('should return an array', function() {
        assert(Array.isArray(current));
    });


    describe('String#split #2', function() {
        it('should return an array', function() {
            assert(Array.isArray(current))
        });



    })

    //Skip this test case
    describe.skip('String#split #3', function() {
        it('should return an array', function() {
            assert(Array.isArray(current))
        })
    });

    //Do only this test avoid rest
    /*describe.only('String#split #4', function() {
        it('should return an array', function() {
            assert(Array.isArray(current))
        })
    });*/

});
