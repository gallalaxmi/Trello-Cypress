const { faker } = require('@faker-js/faker');

export class DashboardScreen {

    applicationSwitcher = "//span[@data-testid='ApplicationSwitcherIcon']";
    memberMenuTooltip = "//button[@aria-label='Open member menu']";
    logoutButton1 = "//button[@data-testid='account-menu-logout']";
    logoutButton2 = "#logout-submit";
    createButton = "//button[@data-testid='header-create-menu-button']";
    createBoardLink = "//button[@data-testid='header-create-board-button']";
    boardTitle = "//input[@data-testid='create-board-title-input']";
    createSubmitButton = "//button[@data-testid='create-board-submit-button']";

    isLoginSuccess() {
        cy.xpath(this.applicationSwitcher).should('be.visible');
    }

    createNewBoard(boardName) {
        cy.xpath(this.createButton).click({force: true}).wait(500);
        cy.xpath(this.createBoardLink).click({force: true}).wait(500);
        if (boardName === "random name")
            cy.xpath(this.boardTitle).type(faker.name().firstName());
        else
            cy.xpath(this.boardTitle).type(boardName);
        cy.xpath(this.createSubmitButton).click({force: true}).wait(500);
    }

}