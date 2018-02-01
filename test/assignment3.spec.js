//Test Case for Assignment3.
const sinon = require("sinon");
const fs = require("fs");
const index = require("../index");

describe("Testing for existence of Asynchronous readFile methods", function() {
  let sandbox = "";
  beforeEach(function() {
    sandbox = sinon.sandbox.create();
  });

  it("should be called readFile", function(done) {
    let stub = sandbox.stub(fs, "readFile");
    index();
    setTimeout(function() {
      sinon.assert.called(stub);
    }, 10000);

    done();
  });
  afterEach(function() {
   sandbox.restore();
  });
});