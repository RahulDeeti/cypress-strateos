import CompoundsPage from "/home/rahuld/Cypress-Projects/cypress-code-push/cypress/robots/strateos/compounds/CompoundsPage.ts";
import CompoundTab from "fixtures/locators/compounds_tab.json";
import Data from "fixtures/data/data.json";

context('Compounds Tab Test', () => {
const cmpObj = new CompoundsPage();

    describe('Test compound creation', ()=> {

        it("login using credentials and create a new project", () => {
            cmpObj.openStrateos();
            cmpObj.login();
            cmpObj.openCompoundsTab(CompoundTab.compounds_tab);
            cmpObj.clickOnRegisterCompoundBtn(
              CompoundTab.register_compound_btn
            );
            cmpObj.clickOnDrawStructure(CompoundTab.draw_structure_btn);
            cmpObj.registerAsPublicCompound(CompoundTab.public_compound_toggle);
            cmpObj.enterSmileString(
              CompoundTab.smile_string_input,
              Data.smile_string_input
            );
            cmpObj.clickOnNext(CompoundTab.next_btn);
            cmpObj.wait(5000);
            cmpObj.enterNickname(
              CompoundTab.compound_nickname_input,
              Data.nickname
            );
            cmpObj.clickOnCreateCompound(CompoundTab.create_compound_button);
            cmpObj.openCompoundsTab(CompoundTab.compounds_tab);
            cmpObj.isCompoundCreated(
              CompoundTab.compound_nickname_view,
              Data.nickname
            );
        });
    });
});