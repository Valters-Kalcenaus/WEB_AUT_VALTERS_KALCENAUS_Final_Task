import BasePage from "./Base.page";

class FormPage extends BasePage{

    static get url(){
        return "/automation-practice-form";
    }
    static get firstName(){
        return cy.get("#firstName");
    }
    static get lastName(){
        return cy.get("#lastName");
    }
    static get email(){
        return cy.get("#userEmail");
    }
    static get maleOption(){
        return cy.get("#gender-radio-1");
    }
    static get mobileNumber(){
        return cy.get("#userNumber");
    }
    static get dateOfBirth(){
        return cy.get("#dateOfBirthInput");
    }
    static get year(){
        return cy.get(".react-datepicker__year-select");
    }
    static get month(){
        return cy.get(".react-datepicker__month-select");
    }
    static get day(){
        return cy.get(".react-datepicker__day");
    }
    static get subjects(){
        return cy.get(".subjects-auto-complete__value-container");
    }
    static get economics(){
        return cy.get(".subjects-auto-complete__menu");
    }
    static get musicCheckBox(){
        return cy.get("#hobbies-checkbox-3");
    }
    static get picture(){
        return cy.get("#uploadPicture");
    }
    static get currentAddress(){
        return cy.get("#currentAddress");
    }
    static get stateAndCity(){
        return cy.get("#stateCity-wrapper");
    }
    static get NCR(){
        return cy.get("#react-select-3-option-0")
    }
    static get delhi(){
        return cy.get("#react-select-4-option-0")
    }
    static get submitButton(){
        return cy.get("#submit")
    }
    static get formTable(){
        return cy.get(".table")
    }
}

export default FormPage;