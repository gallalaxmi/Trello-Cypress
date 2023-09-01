import {HomeScreen} from "./HomeScreen";
const homeScreen = new HomeScreen();

export class LoginScreen {

    userName = "#user";
    continueButton = "#login";
    password = "#password";
    loginSubmit = "#login-submit";

    enterCredentials() {
        cy.get(this.userName).type(Cypress.env("userName"));
        cy.get(this.continueButton).click({force: true}).wait(2000);
        cy.get(this.password).type(Cypress.env("password"));
        cy.get(this.loginSubmit).click({force: true}).wait(500);
    }

    logIn(){
        // cy.get(homeScreen.login).click({force: true}).wait(500);
        cy.get(this.userName).type(Cypress.env("userName"));
        cy.get(this.continueButton).click({force: true}).wait(2000);
        cy.get(this.password).type(Cypress.env("password"));
        cy.get(this.loginSubmit).click({force: true}).wait(500);
    }
}