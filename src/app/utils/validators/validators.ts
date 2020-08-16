import { AbstractControl } from '@angular/forms';


export class MyValidators {
    static isPriceValid(control: AbstractControl) {
        const value = control.value;
        console.log(value);
        if (value > 10000) {
            return {price_invalid: true};
        }
        return null;
    }
}

export class EmailValidator {
    static isEmailValid(control: AbstractControl) {
        //TODO: pasword validator, emailvalidator
        const value = control.value;
        if (value) {
            return {email_invalid: true}
        }
        return null;
    }
}
