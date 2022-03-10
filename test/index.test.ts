
import {
    isNumber,
    isObject,
} from "../src/lang"
import * as Str from '../src/string';
describe("test", () => {
    it("isNumber", () => {
        expect(isNumber(1)).toBe(true);
    })
    it('isObject', () => {
        expect(isObject([])).toBe(true);
    })
    it('Str.reverse', () => {
        expect(Str.reverse("abc")).toBe('cba')
    })
})