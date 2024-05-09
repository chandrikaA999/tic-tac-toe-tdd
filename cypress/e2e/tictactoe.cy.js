describe("TicTacToe game", () => {
  const pageurl = 'http://localhost:3000/'

  it("Should display the tic tac toe game", () => {
    cy.visit(pageurl);
    cy.get('[data-testId="board"]').should("exist");
  });

  it("Should have 9 square", () => {
    cy.visit(pageurl);
    cy.get('[data-testId="square-button"]').should("have.length", 9);
  });

  it("Should have all nulls to the initial squares", () => {
    cy.visit(pageurl);
    cy.get('[data-testid="square-button"]').should("contain.text","");
  });

  it("Should have value X for first player", () => {
    cy.visit(pageurl);
    cy.get('[data-testId="square-button"]').first().click();
    cy.get('[data-testId="square-button"]').first().should("have.text", "X");
  });

  it("Should have value O for second player", () => {
    cy.visit(pageurl);
    cy.get('[data-testId="square-button"]').first().click();
    cy.get('[data-testId="square-button"]').eq(1).click();
    cy.get('[data-testId="square-button"]').eq(1).should("have.text", "O");
  });

  it("Should display Next Player:X initially", () => {
    cy.visit(pageurl);
    cy.get('[data-testId="status"]').should("contain.text", "Next Player: X");
  });

  it("Should display Next Player:O after a move", () => {
    cy.visit(pageurl);
    cy.get('[data-testId="square-button"]').eq(1).click();
    cy.get('[data-testId="status"]').should("contain.text", "Next Player: O");
  });

  it("Should not allow to make move in already filled square", () => {
    cy.visit(pageurl);
    cy.get('[data-testId="square-button"]').eq(1).click();
    cy.get('[data-testId="square-button"]').eq(1).should("have.text", "X");
    cy.get('[data-testId="square-button"]').eq(1).click();
    cy.get('[data-testId="square-button"]').eq(1).should("have.text", "X");
  });

  it("Should display the Winnner:X for X winning", () => {
    cy.visit(pageurl);
    cy.get('[data-testId="square-button"]').eq(8).click();
    cy.get('[data-testId="square-button"]').eq(5).click();
    cy.get('[data-testId="square-button"]').eq(4).click();
    cy.get('[data-testId="square-button"]').eq(3).click();
    cy.get('[data-testId="square-button"]').eq(0).click();
    cy.get('[data-testId="status"]').should("contain.text", "Winner: X");
  });

  it("Should display the Winnner:O for O winning", () => {
    cy.visit(pageurl);
    cy.get('[data-testId="square-button"]').eq(6).click();
    cy.get('[data-testId="square-button"]').eq(2).click();
    cy.get('[data-testId="square-button"]').eq(4).click();
    cy.get('[data-testId="square-button"]').eq(8).click();
    cy.get('[data-testId="square-button"]').eq(1).click();
    cy.get('[data-testId="square-button"]').eq(2).click();
    cy.get('[data-testId="status"]').should("contain.text", "Winner: O");
  });

  it("Should not able to move after decclaring a winner", () => {
    cy.visit(pageurl);
        cy.get('[data-testid="square-button"]').first().click();
        cy.get('[data-testid="square-button"]').eq(1).click();
        cy.get('[data-testid="square-button"]').eq(6).click();
        cy.get('[data-testid="square-button"]').eq(4).click();
        cy.get('[data-testid="square-button"]').eq(8).click();
        cy.get('[data-testid="square-button"]').eq(7).click();
        cy.get('[data-testid="square-button"]').eq(2).click();
        cy.get('[data-testid="square-button"]').eq(2).should("contain.text","");
  });
});
