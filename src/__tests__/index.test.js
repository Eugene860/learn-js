const getPercents = require("../index.js");

test("getPercents", () => {
  it("getPercents(30, 200) to equal 60", () => {
    
    expect(getPercents(percent: 30, number: 200)).toBeCloseTo(60);
  });
});