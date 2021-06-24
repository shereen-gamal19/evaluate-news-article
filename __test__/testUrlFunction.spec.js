//  import the url check function
import { validateUserUrl } from "../src/client/js/checkUserURL";
//we will make a test on validateUserUrl function
describe('Test to  check the input url functionality', () => {
    //we will check if the validateUserUrl function is defined or not by using toBeDefined() matcher in jest
    test('Testing the if the validateUserUrl function defined or not', () => {
        
        expect(validateUserUrl).toBeDefined()

    });
//we will check if validateUserUrl function return false in cade of in valid url or not by using toBeFalsy() matcher
    test('Testing if the validateUserUrl function is returning false for invalid url', () => {

        // we will test if the url is invalid by using.toBeFalsy() matcher and we will enter an invalid url for testing
        expect(validateUserUrl("hellow!hi")) .toBeFalsy();

    });
//we will check if the validateUserUrl function return true in case of valid url or not
    test('Testing the validateUserUrl function return true for valid url', () => {
        // we will test if the url is valid by using.totTruthy() matcher and we will enter a valid url for testing
        expect(validateUserUrl("https://www.google.com")).toBeTruthy();
    });
});
