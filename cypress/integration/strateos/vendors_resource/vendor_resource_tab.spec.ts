import VendorsResourceTab from "/home/rahuld/Cypress-Projects/cypress-code-push/cypress/robots/strateos/vendors_resource/VendorResourceTab";
import VendorsResource from "/home/rahuld/Cypress-Projects/cypress-code-push/cypress/fixtures/locators/vendors_resource_tab.json";
import Data from "/home/rahuld/Cypress-Projects/cypress-code-push/cypress/fixtures/data/data.json";

context('Vendors Tab', () => {
const vndResource = new VendorsResourceTab();

    describe('Vendor resource', ()=>{

        it("login into the strateos application and create a resource", () => {
            vndResource.openStrateos();
            vndResource.login();
            vndResource.clickOnMenu(VendorsResource.menu);
            vndResource.clickOnVendors(VendorsResource.vendors_tab);
            vndResource.clickOnResourceSubtab(
              VendorsResource.vendors_resource_subtab
            );
            vndResource.clickOnAddResourceButton(VendorsResource.add_resource_btn);
            vndResource.enterNameOfTheResource(VendorsResource.resource_name_input,Data.resource_name);
            vndResource.selectKindOfResource(
              VendorsResource.resource_kind_dropdown
            );
            vndResource.selectChemicalStructure(
              VendorsResource.chemical_structure_option
            );
            vndResource.clickOnLinkCompundButton(
              VendorsResource.link_compound_btn
            );
            vndResource.addLinkCompound(VendorsResource.select_link_compound);
            vndResource.clickOnAddButton(VendorsResource.add_link_compound);
            vndResource.clickKindFilterDropDown(
              VendorsResource.kind_filter_dropdown
            );
            vndResource.selectChemicalStructure(
              VendorsResource.kind_filter_chemical_structure_option
            );
            vndResource.clickStorageConditionDropDown(
              VendorsResource.storage_condition_dropdown
            );
            vndResource.selectCold_4(
              VendorsResource.storage_condition_cold4_option
            );
            vndResource.assertResource(
              VendorsResource.resource_card,
              Data.resource_name
            );
        });
    });
});