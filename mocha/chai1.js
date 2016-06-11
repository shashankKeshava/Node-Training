//  to run:  >>  mocha  6chai1.js

var chai = require('chai'),
    foo = 'bar',
    beverages = { tea: ['Darjeeling', 'Assam', 'Kanan Devan'] };




var expect = chai.expect;
expect(foo).to.be.a('string').and.equal('bar');
expect(beverages).to.have.property('tea').with.length(3);


var should = chai.should();
foo.should.be.a('string').and.equal('bar');
beverages.should.have.property('tea').with.length(3);
