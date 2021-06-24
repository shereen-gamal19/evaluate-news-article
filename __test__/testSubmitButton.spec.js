// to fix ReferenceError: regeneratorRuntime is not defined we will import babel-polyfill
// we will test SubmitButton function
import 'babel-polyfill'
import {SubmitButton} from "../src/client/js/Submitbutton"
describe('test the functionality of submit button', () => {
    test("check if the SubmitButton is defined or not",()=>{
        // we will check if the hundleSubmit or not by using .toBeDefined()matcher 
        expect(SubmitButton).toBeDefined();
    })
})
