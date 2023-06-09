import menuTiming from '../PO/menuTiming';
const menuTimingPage = new menuTiming();
describe('Menu Timing Page', ()=>{
  
  it("Move to MenuTiming page",()=>{
    expect(menuTimingPage.elements.ProductsField().click());
    expect(menuTimingPage.elements.MenuTimingField().click());
  });
  it("should check the heading ,icon  and subheading ",()=>{
    expect(menuTimingPage.elements.heading().should('exist'));
    expect(menuTimingPage.elements.heading().should('contain.text',menuTimingPage.dataContent[0]));
    expect(menuTimingPage.elements.subheading().should('contain.text',menuTimingPage.dataContent[1]));
    expect(menuTimingPage.elements.headingIcon().should('exist'));
  });
  it("should check searchBar and addMenuBtn ",()=>{
    expect(menuTimingPage.elements.addMenuBtn().should('exist'));
    expect(menuTimingPage.elements.searchBar().should('exist'));
    expect(menuTimingPage.elements.importCallBtn().should('exist'));
    expect(menuTimingPage.elements.exportCallBtn().should('exist'));
  });
it('should check  exportCall and importcall',()=>{
  expect(menuTimingPage.elements.importCallBtn().should('exist'));
  expect(menuTimingPage.elements.exportCallBtn().should('exist'));
  expect(menuTimingPage.elements.importCallBtn().click());
  cy.wait(2000);
})
it('should check import time dialog ',()=>{
  expect(menuTimingPage.elements.diologTitle().should('exist'));
  expect(menuTimingPage.elements.diologTitle().should('contain.text',menuTimingPage.dataContent[2]));
  expect(menuTimingPage.elements.uploadContainer().should('exist'));
  expect(menuTimingPage.elements.uploadContainer().should('contain.text',menuTimingPage.dataContent[3]));
  expect(menuTimingPage.elements.descriptionField().should('exist'));
  expect(menuTimingPage.elements.addFileBtn().should('exist'));
  expect(menuTimingPage.elements.uploadField().should('exist'));
  expect(menuTimingPage.elements.importCancelBtn().should('exist'));
  expect(menuTimingPage.elements.importCancelBtn().click());
})
  it("should check table",()=>{
    cy.get('.cardHeader');
    cy.get('body').then(($body) => {
      if ($body.find('.cardHeader').is(':visible')) {
        //should check table hearder
        for(let i=0;i<3;i++){
          expect(menuTimingPage.elements.tableHeader().eq(i).should('exist'))
          expect(menuTimingPage.elements.tableHeader().eq(i).should('contain.text',menuTimingPage.headerData[i]))
        }
        //should check edit and delete button
        expect(menuTimingPage.elements.editBtn().should('exist'));
        expect(menuTimingPage.elements.deleteBtn().should('exist'));
        //should check export time dialog
        expect(menuTimingPage.elements.exportCallBtn().click());
        cy.wait(2000);
        expect(menuTimingPage.elements.diologTitle().should('exist'));
        expect(menuTimingPage.elements.diologTitle().should('contain.text',menuTimingPage.dataContent[4]));
        expect(menuTimingPage.elements.uploadContainer().should('exist'));
        expect(menuTimingPage.elements.uploadContainer().should('contain.text',menuTimingPage.dataContent[5]));
        expect(menuTimingPage.elements.radioGroup().should('exist'));
        expect(menuTimingPage.elements.exportBtn().should('exist'));
        expect(menuTimingPage.elements.exportCancelBtn().should('exist'));
        cy.wait(1000);
        expect(menuTimingPage.elements.exportCancelBtn().click());
        cy.wait(1000);
        //should check paginator
        expect(menuTimingPage.elements.paginatorLabel().should('exist'));
        expect(menuTimingPage.elements.paginatorLabel().should('contain.text',menuTimingPage.dataContent[6]));
        expect(menuTimingPage.elements.paginatorNavFirst().should('exist'));
        expect(menuTimingPage.elements.paginatorNavLast().should('exist'));
        expect(menuTimingPage.elements.paginatorNavPrev().should('exist'));
        expect(menuTimingPage.elements.paginatorNavNext().should('exist'));
      }
      else {
        expect(menuTimingPage.elements.noRecordImg().should('exist'));
        expect(menuTimingPage.elements.noRecordData().should('exist'));
        expect(menuTimingPage.elements.noRecordData().should('contain.text',menuTimingPage.dataContent[7]));
      }
    })

 
  });
});