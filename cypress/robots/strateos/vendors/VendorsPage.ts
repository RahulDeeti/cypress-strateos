import { BaseRobot } from '../../BaseRobot';


export default class VendorsPage extends BaseRobot {
  openStrateos() {
    this.accessUrl("http://localhost:5555/");
  }

  login() {
    cy.get("#emailInput").type(Cypress.env("USER_EMAIL"), { log: false });
    cy.get("#passwordInput").type(Cypress.env("USER_PASSWORD"), { log: false });
    cy.get("#submitButton").click();
    return this;
  }

  clickOnMenu(domElement: string) {
    this.clickOnDomElement(domElement);
  }

  clickOnVendors(domElement: string) {
    this.clickOnDomElement(domElement);
  }

  clickOnVendorsSubtab(domElement: string) {
    this.clickOnDomElement(domElement);
  }

  clickOnPlusIcon(domElement: string) {
    this.clickOnDomElement(domElement);
  }

  enterVendorName(domElement: string, text: string) {
    this.typeTextOnSelectedElement(domElement, text);
  }

  clickOnCreateVendor(domElement: string) {
    this.clickOnDomElement(domElement);
  }

  isVendorCreated(domElement: string, text: string) {
    this.seesDomContainText(domElement, text);
  }
}