import menuTiming from '../PO/menuTiming';
const menuTimingPage = new menuTiming();
describe('Menu Timing Page', ()=>{
  
  it("Move to MenuTiming page",()=>{
    cy.wait(2000);
    expect(menuTimingPage.elements.ProductsField().click());
    cy.wait(2000);
    expect(menuTimingPage.elements.MenuTimingField().click());
    cy.wait(2000);
  });
  it("should check table",()=>{
        expect(menuTimingPage.elements.searchBar().type('dvejvr'));
        cy.wait(2000);
        expect(menuTimingPage.elements.noRecordImg().should('exist'));
        expect(menuTimingPage.elements.noRecordData().should('exist'));
        expect(menuTimingPage.elements.noRecordData().should('contain.text',menuTimingPage.dataContent[0]));
        cy.wait(2000);
        expect(menuTimingPage.elements.searchBar().clear());
        cy.wait(2000);
      });
});