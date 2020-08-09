import { simpleFunc } from "../src/SimpleModule";

describe("A simple module", () => {
    test("it should say hello", () => {
        expect(simpleFunc()).toEqual("hello!")
    })
});