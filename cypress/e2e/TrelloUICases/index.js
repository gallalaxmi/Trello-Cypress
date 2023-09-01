import {And} from "cypress-cucumber-preprocessor/steps";
import {DashboardScreen} from "../pageObjects/DashboardScreen";
import {HomeScreen} from "../pageObjects/HomeScreen";
import {LoginScreen} from "../pageObjects/LoginScreen";
import {YourBoardsScreen} from "../pageObjects/YourBoardsScreen";

const yourBoardsScreen = new YourBoardsScreen();
const loginScreen = new LoginScreen();
const dashboardScreen = new DashboardScreen();
const homeScreen = new HomeScreen();

And(/^I navigate to application$/, () => {
    cy.launchApplication();
});

And(/^I logout from application$/, () => {
    cy.xpath(dashboardScreen.memberMenuTooltip).click({force: true}).wait(500);
    cy.xpath(dashboardScreen.logoutButton1).click({force: true}).wait(500);
    cy.get(dashboardScreen.logoutButton2).click({force: true}).wait(500);
    cy.xpath(homeScreen.login).should('be.visible');
});

And(/^I should see login successful$/, () => {
    dashboardScreen.isLoginSuccess();
});

And(/^I create a new board with (.*)$/, (boardName) => {
    dashboardScreen.createNewBoard(boardName);
});

And(/^I navigate to login screen$/, () => {
    homeScreen.navigateToLoginPage();
});

And(/^I enter the valid username and password$/, () => {
    loginScreen.enterCredentials();
});

And(/^I login with valid credentials$/, () => {
    loginScreen.logIn();
});

And(/^I add a list (.*)$/, (listName) => {
    yourBoardsScreen.addAList(listName);
});

And(/^I add a card (.*)$/, (cardName) => {
    yourBoardsScreen.addACard(cardName);
});