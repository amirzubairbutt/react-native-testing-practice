import { describe, expect, test } from "@jest/globals";
import request from "./request";


describe('API Request Test', () => {
    const TEST_CASE = [1, 2, 3, 4];
    TEST_CASE.forEach((item, index) => {
        test(`Test Case ${index}: ${item}`, () => {
            return request.makeAPIRequest(item).then(res => {
                expect(res).toBeTruthy();
            })
        })
    })
})