export class HomeScreen {

    login = "(//a[contains(text(),'Log in')])[1]";

    navigateToLoginPage() {
        cy.xpath(this.login).click({force: true}).wait(500);
    }
}