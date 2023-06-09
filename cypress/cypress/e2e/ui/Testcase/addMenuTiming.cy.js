import addMenuTiming from '../PO/addMenuTiming';
const addMenuTimingPage = new addMenuTiming();
describe('Add Menu Timing Page', ()=>{
  it("Move to add Menu Timing page",()=>{
    expect(addMenuTimingPage.elements.addMenuBtn().click());
    cy.wait(1000);
  });
  it("should check  save and cancel butoon",()=>{
    expect(addMenuTimingPage.elements.saveBtn().should('exist'));
    expect(addMenuTimingPage.elements.cancelBtn().should('exist'));
  });
  it("should check form field in Add Menu Timing Page",()=>{
    expect(addMenuTimingPage.elements.menuNameField().should('exist'));
    expect(addMenuTimingPage.elements.menuCategoriesField().should('exist'));
    expect(addMenuTimingPage.elements.descriptionField().should('exist'));
  });
  it("should check location,location-note-section and locationPanel",()=>{
    expect(addMenuTimingPage.elements.locationName().should('exist'));
    expect(addMenuTimingPage.elements.locationNote().should('exist'));
    expect(addMenuTimingPage.elements.locationNote().should('contain.text',addMenuTimingPage.dataContent[2]));
   
  });
  it("should check Menu Available Timing",()=>{
      expect(addMenuTimingPage.elements.locationPanel().should('exist'));
      cy.wait(2000);
      expect(addMenuTimingPage.elements.locationPanel().click());
      cy.wait(2000);
      expect(addMenuTimingPage.elements.availableToggle().should('exist'));
      expect(addMenuTimingPage.elements.availableToggle().click());
      cy.wait(2000);
      expect(addMenuTimingPage.elements.menuClosedDaysField().should('exist'));
      expect(addMenuTimingPage.elements.addWorkingHoursField().should('exist'));
      cy.wait(1000);
      expect(addMenuTimingPage.elements.addWorkingHoursField().click());
      cy.wait(1000);
      expect(addMenuTimingPage.elements.daysField().should('exist'));
      expect(addMenuTimingPage.elements.startTimeField().should('exist'));
      expect(addMenuTimingPage.elements.endTimeField().should('exist'));
      expect(addMenuTimingPage.elements.removeWorkingHoursField().should('exist'));
      cy.wait(1000);
    });
    it("Move to Menu Timing page",()=>{
      expect(addMenuTimingPage.elements.cancelBtn().click());
    });
    it("should check unsave dialogbox",()=>{
        expect(addMenuTimingPage.elements.dialogHeader().should("exist"));
        expect(addMenuTimingPage.elements.dialogHeader().should('contain.text',addMenuTimingPage.dialogHeader[0]));
        expect(addMenuTimingPage.elements.dialogSubContent().should("exist"));
        expect(addMenuTimingPage.elements.dialogSubContent().should('contain.text',addMenuTimingPage.dialogContent[0]));
        expect(addMenuTimingPage.elements.rightBtn().should('exist'));
        expect(addMenuTimingPage.elements.leftBtn().should('exist'));
        cy.wait(1000);
        expect(addMenuTimingPage.elements.rightBtn().click());
        cy.wait(1000);
      })
  
});