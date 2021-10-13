const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const thunderstorm = require("../problems/02-thunderstorm.js");

describe("thunderstorm()", function() {
  afterEach(function() {
    chai.spy.restore(global);
  });

  it("should print out a rain event with a 200ms pause", function(done) {
    let msecs = 200;
    this.timeout(msecs + 200);

    stormEvents = ['rain'];

    let setIntervalSpy;
    let setConsoleLogSpy;

    setTimeout(function() {
      expect(setIntervalSpy).to.have.been.called.nth(1).with(200);
      expect(setConsoleLogSpy).to.have.been.called.nth(1).with("rain");

      done();
    }, msecs + 100);
    setIntervalSpy = chai.spy.on(global, "setTimeout");
    setConsoleLogSpy = chai.spy.on(console, "log");

    thunderstorm(stormEvents);

  });

  it("should print out a lightning event with a 'FLASH!' followed by a 'BOOM!')", function(done) {
    let msecs = 400;
    this.timeout(msecs + 400);

    stormEvents = ['lightning'];

    let setIntervalSpy;
    let setConsoleLogSpy;
    setTimeout(function() {
      expect(setIntervalSpy).to.have.been.called.nth(1).with(400);
      expect(setConsoleLogSpy).to.have.been.called.nth(1).with("FLASH!");
      expect(setIntervalSpy).to.have.been.called.nth(2).with(200);
      expect(setConsoleLogSpy).to.have.been.called.nth(2).with("BOOM!");

      done();
    }, msecs + 200);
    setIntervalSpy = chai.spy.on(global, "setTimeout");
    setConsoleLogSpy = chai.spy.on(console, "log");

    thunderstorm(stormEvents);

  });

  it("should print out a storm event in the correct order", function(done) {
    let msecs = 1000;
    this.timeout(msecs + 400);

    stormEvents = ["lightning", "rain", "wind"];

    let setIntervalSpy;
    let setConsoleLogSpy;
    setTimeout(function() {
      expect(setIntervalSpy).to.have.been.called.nth(1).with(400);
      expect(setConsoleLogSpy).to.have.been.called.nth(1).with("FLASH!");

      expect(setIntervalSpy).to.have.been.called.nth(2).with(200);
      expect(setConsoleLogSpy).to.have.been.called.nth(2).with("rain");

      expect(setIntervalSpy).to.have.been.called.nth(3).with(200);
      expect(setConsoleLogSpy).to.have.been.called.nth(3).with("BOOM!");

      expect(setIntervalSpy).to.have.been.called.nth(4).with(200);
      expect(setConsoleLogSpy).to.have.been.called.nth(4).with("wind");

      done();
    }, msecs + 200);
    setIntervalSpy = chai.spy.on(global, "setTimeout");
    setConsoleLogSpy = chai.spy.on(console, "log");

    thunderstorm(stormEvents);

  });

});
