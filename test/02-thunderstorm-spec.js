const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

const thunderstorm = require("../problems/02-thunderstorm.js");

describe("thunderstorm()", function() {
  afterEach(function() {
    chai.spy.restore(global);
  });

  it("Every event in the array should print something, then pause 200ms before the next event in the array is called", function(done) {
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

  it("For lightning events, the FLASH! should be followed by a BOOM! 400ms later)", function(done) {
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

  it("Longer storms should print in the correct order, with 200ms between each event in the array AND 400ms between each FLASH! and BOOM!", function(done) {
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
