var expect = require("chai").expect;

describe("test an async ops", function() {
    var foo = false;

    beforeEach(function(done) {

        // simulate async call w/ setTimeout
        setTimeout(function() {
            foo = true;
            // done allows to wait for completion
            done();
        }, 50);

    });

    it("should passshould get the right data", function(done) {
        expect(foo).equals(true);
        done();
    });

});
