import { describe, expect, test } from "@jest/globals";
import { sum } from "./sum";

describe('sum module', () => {
    test("add 1 + 2 equal 3", () => {
        expect(sum(1, 2)).toBe(3)
    })
})