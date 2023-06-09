import addMenuTiming from '../PO/addMenuTiming';
const addMenuTimingPage = new addMenuTiming();
describe('Add Menu Timing Page', ()=>{
  it("Move to MenuTiming page",()=>{
    expect(addMenuTimingPage.elements.ProductsField().click());
    expect(addMenuTimingPage.elements.MenuTimingField().click());
  });
  it("Move to add Menu Timing page",()=>{
    expect(addMenuTimingPage.elements.addMenuBtn().click());
  });
  it("add menu",()=>{
    expect(addMenuTimingPage.elements.menuNameField().type('test1'));
    expect(addMenuTimingPage.elements.menuCategoriesField().click());
    cy.wait(1000);
    expect(addMenuTimingPage.elements.selectOpt().eq(0).click());
    cy.wait(1000);
    cy.get('body').click('topRight')
    expect(addMenuTimingPage.elements.descriptionField().type('describe'));
  });
  it("Menu Available Timing",()=>{
    cy.wait(2000);
    expect(addMenuTimingPage.elements.locationPanel().click());
    cy.wait(2000);
    expect(addMenuTimingPage.elements.availableToggle().click());
    expect(addMenuTimingPage.elements.menuClosedDaysField().click());
    expect(addMenuTimingPage.elements.selectOpt().eq(0).click());
    cy.get('body').click('topRight');
  });
  it("add Working Hours",()=>{
    cy.wait(1000);
    expect(addMenuTimingPage.elements.addWorkingHoursField().click());
    cy.wait(1000);
    expect(addMenuTimingPage.elements.daysField().click());
    cy.wait(1000);
    expect(addMenuTimingPage.elements.selectOpt().eq(0).click());
    cy.get('body').click('topRight');
    expect(addMenuTimingPage.elements.startTimeField().click());
    cy.wait(1000);
    expect(addMenuTimingPage.elements.hourClock().eq(0).click());
    cy.wait(1000);
    expect(addMenuTimingPage.elements.hourClock().eq(10).click( {force: true}));
    cy.wait(1000);
    expect(addMenuTimingPage.elements.timepickerOkButton().eq(1).click());
    cy.wait(1000);
    expect(addMenuTimingPage.elements.endTimeField().click());
    cy.wait(1000);
    expect(addMenuTimingPage.elements.hourClock().eq(0).click());
    cy.wait(1000);
    expect(addMenuTimingPage.elements.hourClock().eq(15).click( {force: true}));
    cy.wait(1000);
    expect(addMenuTimingPage.elements.timepickerOkButton().eq(1).click());
    expect(addMenuTimingPage.elements.saveBtn().click());

  });
  it("should check success save dialogbox",()=>{
    expect(addMenuTimingPage.elements.successIcon().should("exist"));
    expect(addMenuTimingPage.elements.dialogHeader().should("exist"));
    expect(addMenuTimingPage.elements.dialogHeader().should('contain.text',addMenuTimingPage.dialogHeader[0]));
    expect(addMenuTimingPage.elements.dialogSubContent().should("exist"));
    expect(addMenuTimingPage.elements.dialogSubContent().should('contain.text',addMenuTimingPage.dialogContent[0]));
    cy.wait(1000);
    expect(addMenuTimingPage.elements.rightBtn().click());
    cy.wait(1000);
  })
  it("should check edit scenario",()=>{
    expect(addMenuTimingPage.elements.searchBar().clear());
    expect(addMenuTimingPage.elements.searchBar().type('test1'));
    cy.wait(1000);
    expect(addMenuTimingPage.elements.editBtn().click());
    cy.wait(1000);
    expect(addMenuTimingPage.elements.descriptionField().clear());
    expect(addMenuTimingPage.elements.descriptionField().type('example'));
    cy.wait(1000);
    expect(addMenuTimingPage.elements.saveBtn().click());
    cy.wait(1000);
  })
  it("should check success update dialogbox",()=>{
    expect(addMenuTimingPage.elements.successIcon().should("exist"));
    expect(addMenuTimingPage.elements.dialogHeader().should("exist"));
    expect(addMenuTimingPage.elements.dialogHeader().should('contain.text',addMenuTimingPage.dialogHeader[0]));
    expect(addMenuTimingPage.elements.dialogSubContent().should("exist"));
    expect(addMenuTimingPage.elements.dialogSubContent().should('contain.text',addMenuTimingPage.dialogContent[1]));
    cy.wait(1000);
    expect(addMenuTimingPage.elements.rightBtn().click());
  
  })
  it("should check delete scenario",()=>{  cy.wait(1000);
    expect(addMenuTimingPage.elements.searchBar().clear());
    expect(addMenuTimingPage.elements.searchBar().type('test1'));
    cy.wait(1000);
    expect(addMenuTimingPage.elements.deleteBtn().click());
    cy.wait(1000);
  })
  it("should check success save dialogbox",()=>{
    expect(addMenuTimingPage.elements.dialogDeleteIcon().should("exist"));
    expect(addMenuTimingPage.elements.dialogHeader().should("exist"));
    expect(addMenuTimingPage.elements.dialogHeader().should('contain.text',addMenuTimingPage.dialogHeader[1]));
    expect(addMenuTimingPage.elements.dialogSubContent().should("exist"));
    expect(addMenuTimingPage.elements.dialogSubContent().should('contain.text',addMenuTimingPage.dialogContent[2]));
    expect(addMenuTimingPage.elements.rightBtn().should('exist'));
    expect(addMenuTimingPage.elements.leftBtn().should('exist'));
    cy.wait(1000);
    expect(addMenuTimingPage.elements.rightBtn().click());
    cy.wait(1000);
  })
  it("should check success remove dialogbox",()=>{
    expect(addMenuTimingPage.elements.successIcon().should("exist"));
    expect(addMenuTimingPage.elements.dialogHeader().should("exist"));
    expect(addMenuTimingPage.elements.dialogHeader().should('contain.text',addMenuTimingPage.dialogHeader[0]));
    expect(addMenuTimingPage.elements.dialogSubContent().should("exist"));
    expect(addMenuTimingPage.elements.dialogSubContent().should('contain.text',addMenuTimingPage.dialogContent[3]));
    cy.wait(1000);
    expect(addMenuTimingPage.elements.rightBtn().click());
    cy.wait(1000);
    expect(addMenuTimingPage.elements.searchBar().clear());
  })
  it("should check paginator",()=>{
    // cy.get('.cardHeader');
    cy.get('body').then(($body) => {
      if ($body.find('.cardHeader ').is(':visible')) {
        console.log('if statement')
        cy.wait(1000);
       expect(addMenuTimingPage.elements.paginatorSizeBtn().click());
       cy.wait(1000);
       expect(addMenuTimingPage.elements.paginatorSizeOpt().eq(0).click());
       cy.wait(1000); 
      }
      else {
        console.log('else statement')
      }
    })

 
  });
});