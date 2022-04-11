import { BaseRobot } from "../../BaseRobot";

export default class ProjectsPage extends BaseRobot {
  openStrateos() {
    this.accessUrl("http://localhost:5555/");
  }

  login() {
    cy.get("#emailInput").type(Cypress.env("USER_EMAIL"), { log: false });
    cy.get("#passwordInput").type(Cypress.env("USER_PASSWORD"), { log: false });
    cy.get("#submitButton").click();
    return this;
  }

  openProjectsTab(domElement: string) {
    this.clickOnDomElement(domElement);
  }

  createNewProject(domElement: string) {
    this.clickOnDomElement(domElement);
  }

  enterProjectName(domElement: string, name: string) {
    this.typeTextOnSelectedElement(domElement, name);
  }

  clickOnSubmit(domElement: string) {
    this.clickOnDomElement(domElement);
  }

  isProjectNameSame(domElement: string, name: string) {
    this.seesTextOnSelectedElement(domElement, name);
  }

  addProjectToFavorite(domElement: string) {
    this.clickOnDomElement(domElement);
  }

  isProjectFavorite(domElement: string, className: string) {
    this.seesClassOnDomElement(domElement, className);
  }
}
