/// <reference types="cypress" />
describe("peekameet", () => {
  //on the home page
  it("test one", () => {
    cy.viewport("macbook-11");
    cy.visit("http://localhost:3000/");
  });
  //logging in by entering email and password
  it("login correctly", () => {
    cy.get("[data-testid=email]").type("bhagyashree.srivastava@daffodilsw.com");
    cy.get("[data-testid=password]").type("Hrhk@123");
    cy.get("[data-testid=login]").click();
  });
  //navigating to notes section
  it("navigation", () => {
    cy.wait(2000);
    cy.get("[data-testid=notesSection]").click();
  });
  //navigating to add notes form
  it("addNotes", () => {
    cy.wait(1000);
    cy.contains("Add Notes").click();
  });
  //entering details like date time and text
  it("addForm", () => {
    const dateFormat = new Date();
    const dd = ("0" + dateFormat.getDate()).slice(-2);
    const mm = ("0" + dateFormat.getMonth() + 1).slice(-2);
    const yyyy = dateFormat.getFullYear();
    const hr = dateFormat.getHours();
    const min = ("0" + dateFormat.getMinutes()).slice(-2);
    // const todaysDate = Cypress.moment().format("DD/MM/YYYY");
    cy.get("input[type=date]").type(`${yyyy}-${mm}-${dd}`);
    cy.get("input[type=time]").type(`${hr}:${min}`);
    cy.get("input[type=textarea]").type(
      `Hello vibha here ${new Date().getTime()}`
    );
  });
  //saving the form
  it("save", () => {
    cy.contains("Save").click();
  });
  it("logout", () => {
    cy.contains("Logout").click();
  });
});
