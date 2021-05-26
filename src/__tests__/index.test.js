import {getPercents} from "../index.js";

describe("test getPercents", () => {
    it('should return percents ', function () {
        expect(getPercents(20,100)).toBe(20);
        expect(getPercents(5,90)).toBe(4.5);
        expect(getPercents(15,15)).toBe(2.25);
        expect(getPercents(20,35.5)).toBe(7.1);
        expect(getPercents(0,70)).toBe(0);
        expect(getPercents(-20,100)).toBeUndefined();
    });
});
