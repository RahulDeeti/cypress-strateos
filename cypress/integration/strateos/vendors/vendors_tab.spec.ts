import VendorsPage from "/home/rahuld/Cypress-Projects/cypress-code-push/cypress/robots/strateos/vendors/VendorsPage";
import VendorsTab from "/home/rahuld/Cypress-Projects/cypress-code-push/cypress/fixtures/locators/vendors_tab.json";
import Data from "/home/rahuld/Cypress-Projects/cypress-code-push/cypress/fixtures/data/data.json";
context('Vendors Tab', () => {
const vndObj = new VendorsPage();

    describe('Vendor creation test', ()=>{

        it("login into the strateos application and create a vendor", () => {
            vndObj.openStrateos();
            vndObj.login();
            vndObj.clickOnMenu(VendorsTab.menu);
            vndObj.clickOnVendors(VendorsTab.vendors_tab);
            vndObj.clickOnVendorsSubtab(VendorsTab.vendors_subtab);
            vndObj.wait(3000);
            vndObj.clickOnPlusIcon(VendorsTab.plus_icon);
            vndObj.enterVendorName(
              VendorsTab.vendor_name_input,
              Data.vendor_name
            );
            vndObj.clickOnCreateVendor(VendorsTab.create_vendor);
            vndObj.isVendorCreated(
              VendorsTab.vendors_list_item,
              Data.vendor_name
            );
        });
    });
});