export class YourBoardsScreen {

    listName = "//input[@name='name']";
    addListButton = "//input[@value='Add list']";
    cancelList = "//a[@aria-label='Cancel list editing']";
    addACardLink = "//a[@data-testid='list-add-card-button']";
    cardTitle = "//textarea[@data-testid='list-card-composer-textarea']";
    addCardButton = "//input[@value='Add card']";

    addAList(listName) {
        cy.xpath(this.listName).type(listName);
        cy.xpath(this.addListButton).click({force: true}).wait(500);
        // cy.xpath(`//h2[text()='${listName}']`).should('be.visible');
    }

addACard(cardName) {
    const cardNames = cardName.split("--");
    cy.xpath(this.addACardLink).click({force: true}).wait(500);
    for (const card of cardNames) {
        cy.xpath(this.cardTitle).type(card);
        cy.xpath(this.addCardButton).click({force: true}).wait(500);
        // cy.xpath(`//span[text()='${card}']`).should('be.visible');
    }
}
    
}