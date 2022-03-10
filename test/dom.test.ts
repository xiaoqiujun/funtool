/**
 * @jest-environment jsdom
 */
import {
    isiPhone
} from "../src/lang"
test('use jsdom in this test file', () => {
    expect(isiPhone()).toBe(false)
});