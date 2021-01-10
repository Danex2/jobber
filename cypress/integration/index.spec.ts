/// <reference types="Cypress" />

describe("Testing the job application", () => {
  it("Should render without errors", () => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.visit("/");
  });
  it("Should show the oldest job postings first", () => {
    cy.wait(3000);
    cy.get("[data-cy=date-select]").select("Oldest");
    cy.get("[data-cy=job-name]").eq(0).should("contain", "Playco");
  });
  it("Should show only the contract postings", () => {
    cy.wait(3000);
    cy.get("[data-cy=type-select]").select("Contract");
    cy.get("[data-cy=job-name]").eq(0).should("contain", "PERI");
  });
  it("Should show only the full time postings", () => {
    cy.wait(3000);
    cy.get("[data-cy=type-select]").select("Full-time");
    cy.get("[data-cy=job-name]").eq(0).should("contain", "PAI Health");
  });
  it("Should show only the Hasura postings if the user types in hasura in the search bar", () => {
    cy.wait(3000);
    cy.get("[data-cy=listings-input]").type("Hasura");
    cy.get("[data-cy=job-name]").eq(0).should("contain", "Hasura");
    cy.get("[data-cy=job-name]").eq(1).should("contain", "Hasura");
    cy.get("[data-cy=job-name]").eq(2).should("contain", "Hasura");
  });
});

export {};
