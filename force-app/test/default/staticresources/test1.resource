describe("A simple passing test", function () {
  it("verifies that true is always true", function () {
    expect(true).toBe(true);
  });
});

describe("A simple failing test", function () {
  it("fails when false does not equal true", function () {
    expect(true).toBe(false);
  });
});

describe("c:ReactWelcome", function () {
  it("sets component attributes", function (done) {
    var that = this;

    $T.createComponent("c:ReactWelcome", null)
      .then(function (component) {
        return $T.waitFor(function () {
          that.component = component;
          return 1 === 1; //
        }, 10000);
      }).then(function () {
        expect(that.component.get("v.var1")).toBe("xyz");
        done();
      }).catch(function (e) {
        done.fail(e);
      });
  });
});