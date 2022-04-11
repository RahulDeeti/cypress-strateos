import CompoundsPage from '/home/rahuld/cypress-testing/cypress-starter-master/cypress/robots/strateos/compounds/CompoundsPage';

context('Compounds Tab Test', () => {
const cmpObj = new CompoundsPage();

    describe('Test compound creation', ()=>{

        it("login using credentials and create a new project", () => {
            cmpObj.openStrateos();
            cmpObj.login();
            cmpObj.openCompoundsTab(":nth-child(4) > .subtabs__tab-link");
            cmpObj.clickOnRegisterCompoundBtn('[style="position: relative;"] > .btn');
            cmpObj.clickOnDrawStructure(
              ":nth-child(1) > .btn > .btn__content > .compound-dropdown__button"
            );
            cmpObj.registerAsPublicCompound(".toggle__label--on");
            cmpObj.enterSmileString(
              ".validated-input__input > .text-input",
              "CNCNCNCN"
            );
            cmpObj.clickOnNext(".button-group > :nth-child(1) > .btn");
            cmpObj.wait(6000);
            cmpObj.enterNickname(
             ":nth-child(1) > .labeled-input > .text-input",
             "NickName"
           );
            cmpObj.clickOnCreateCompound(
              ".button-group > :nth-child(2) > .btn"
            );
            cmpObj.openCompoundsTab(":nth-child(4) > .subtabs__tab-link");
            cmpObj.isCompoundCreated(
              ":nth-child(1) > :nth-child(3) > .amino-table__cell-content > .tooltip-wrapper > p",
              "NickName"
            );
        });
    });
});