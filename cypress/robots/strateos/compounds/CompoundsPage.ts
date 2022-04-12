import { BaseRobot } from '../../BaseRobot';


export default class CompoundsPage extends BaseRobot {
  openStrateos() {
    this.accessUrl("http://localhost:5555/");
  }

  login() {
    cy.get("#emailInput").type(Cypress.env('USER_EMAIL'), {log: false});
    cy.get("#passwordInput").type(Cypress.env('USER_PASSWORD'), {log: false});
    cy.get("#submitButton").click();
    return this;
  }

  openCompoundsTab(domElement: string) {
    this.clickOnDomElement(domElement);
  }

  clickOnRegisterCompoundBtn(domElement: string) {
    this.clickOnDomElement(domElement);
  }

  clickOnDrawStructure(domElement: string) {
    this.clickOnDomElement(domElement);
  }

  registerAsPublicCompound(domElement: string) {
    this.clickOnDomElement(domElement);
  }

  enterSmileString(domElement: string, smile: string) {
    this.typeTextOnSelectedElement(domElement, smile);
  }

  clickOnNext(domElement: string) {
    this.clickOnDomElement(domElement);
  }

  enterNickname(domElement: string, smile: string) {
    this.typeTextOnSelectedElement(domElement, smile);
  }

  clickOnCreateCompound(domElement: string) {
    this.clickOnDomElement(domElement);
  }

  isCompoundCreated(domElement: string, name: string) {
    this.seesTextOnSelectedElement(domElement, name);
  }
}