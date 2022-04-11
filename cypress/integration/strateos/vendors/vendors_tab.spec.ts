import VendorsPage from "/home/rahuld/cypress-testing/cypress-starter-master/cypress/robots/strateos/vendors/VendorsPage";
context('Vendors Tab', () => {
const vndObj = new VendorsPage();

    describe('Vendor creation test', ()=>{

        it("login into the strateos application and create a vendor", () => {
            vndObj.openStrateos();
            vndObj.login();
            vndObj.clickOnMenu(".subtabs__tab-link > span");
            vndObj.clickOnVendors(
              ":nth-child(2) > .input-suggestions__suggestion-content > .input-suggestions__suggestion-content-text > .submenu-link__dropdown-item"
            );
            vndObj.clickOnVendorsSubtab(
              ".page-layout__tabs > .subtabs > :nth-child(4) > .subtabs__tab-link"
            );
            vndObj.wait(6000);
            vndObj.clickOnPlusIcon(".fa-plus");
            vndObj.enterVendorName(".text-input", "vendorName1");
            vndObj.clickOnCreateVendor(".btn__content > span");
            vndObj.isVendorCreated(".card", "vendorName1");
        });
    });
});