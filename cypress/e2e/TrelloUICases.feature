@AllCases
Feature: Validate UI test cases for Trello Application

  @Login @UICases
  Scenario: Validate successful login to trello application
    Given I navigate to application
    When I enter the valid username and password
    Then I should see login successful
    And I logout from application
    
  @CreateBoard @UICases
  Scenario Outline: Create a board, add list and add card to it
    Given I navigate to application
    When I login with valid credentials
    And I create a new board with <boardName>
    And I add a list <listName>
    And I add a card <cardName>
    And I logout from application
    
    Examples:
      |	boardName	|	listName	|	cardName		|
      |	Random name	|	List1		|	Card1--Card2	|
