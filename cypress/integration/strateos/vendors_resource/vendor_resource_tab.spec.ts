import VendorsResourceTab from "/home/rahuld/cypress-testing/cypress-starter-master/cypress/robots/strateos/vendors_resource/VendorResourceTab";
context('Vendors Tab', () => {
const vndResource = new VendorsResourceTab();

    describe('Vendor resource', ()=>{

        it("login into the strateos application and create a resource", () => {
            vndResource.openStrateos();
            vndResource.login();
            vndResource.clickOnMenu(".subtabs__tab-link > span");
            vndResource.clickOnVendors(
              ":nth-child(2) > .input-suggestions__suggestion-content > .input-suggestions__suggestion-content-text > .submenu-link__dropdown-item"
            );
            vndResource.clickOnResourceSubtab(
              ".page-layout__tabs > .subtabs > :nth-child(3) > .subtabs__tab-link"
            );
            vndResource.clickOnAddResourceButton(
              ".tx-stack__block--sm > .btn > .btn__content"
            );
            vndResource.enterNameOfTheResource(".text-input", "resName");
            vndResource.selectKindOfResource(
              ":nth-child(2) > .labeled-input > .select > .select-input__container > .select-input__wrapper"
            );
            vndResource.selectChemicalStructure(
              ":nth-child(2) > .input-suggestions__suggestion-content > .input-suggestions__suggestion-content-text"
            );
            vndResource.clickOnLinkCompundButton(
              ".labeled-input > .btn > .btn__content"
            );
            vndResource.addLinkCompound(
              ":nth-child(1) > :nth-child(1) > .amino-table__cell-content > .tx-checkbox > .tx-checkbox__content > .tx-checkbox__icon-container > .fa"
            );
            vndResource.clickOnAddButton(".create-org > .btn__content");
            vndResource.clickKindFilterDropDown(
              ":nth-child(1) > :nth-child(1) > .search-filter-bar-title-wrapper > .search-filter-wrapper__title > .fa"
            );
            vndResource.selectChemicalStructure(':nth-child(1) > :nth-child(1) > .search-filter-wrapper__vertical-options > .search-filter > .radio-group > :nth-child(2) > .tx-radio__content > .tx-radio__toggle')
            vndResource.clickStorageConditionDropDown(
              ":nth-child(2) > :nth-child(1) > .search-filter-bar-title-wrapper > .search-filter-wrapper__title > .fa"
            );
            vndResource.selectCold_4(
              ":nth-child(2) > :nth-child(1) > .search-filter-wrapper__vertical-options > .search-filter > .radio-group > :nth-child(3) > .tx-radio__content > .tx-radio__toggle"
            );
            vndResource.assertResource(
              ":nth-child(1) > .resource-card__card",
              "resName"
            );
        });
    });
});