import { LoginValidations } from "./login";
import { expect, it } from '@jest/globals';

const { areFormFieldsValid, isEmailValid, isPasswordValid } = LoginValidations();

it('should be a valid email', () => {
    expect(isEmailValid('john@gmail.com')).toBeTruthy();
});

it('should not be a valid email', () => {
    expect(isEmailValid('john.gmail.com')).toBeFalsy();
});

it('should be a valid password', () => {
    expect(isPasswordValid('123345678')).toBeTruthy();
});

it('should be a valid password', () => {
    expect(isPasswordValid('1233')).toBeFalsy();
});

it('should be valid input fields', () => {
    expect(areFormFieldsValid('john@gmail.com', '12345678')).toBeTruthy();
});

it('should not valid input fields', () => {
    expect(areFormFieldsValid('john.gmail.com', '1234')).toBeFalsy();
});