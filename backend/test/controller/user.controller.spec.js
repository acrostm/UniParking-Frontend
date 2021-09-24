// eslint validated


// var sinon = require('sinon');
var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should();
var userController = require('../../controllers/userController');



describe('userController, validate the emailValidation function', function () {


    it("valid email used", function () {

        const result = userController.emailValidation("info30005@unimelb.com");
        expect(result).to.equal(true);
        result.should.equal(true);
        assert.equal(result, true);
    });


    it("invalid email used", function () {
        const result = userController.emailValidation("info30005.unimelb.com");
        expect(result).to.equal(false);
        result.should.equal(false);
        assert.equal(result, false);
    });

});
