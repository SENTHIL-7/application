import employee from '../PO/employee';
const employeePage = new employee();
describe('Employee table', ()=>{
  it('page size',()=>{
    expect(employeePage.elements.pageSizeField().click());
    cy.wait(2000);
    expect(employeePage.elements.pageSizeOptions().eq(1).click())
    cy.wait(2000);
    expect(employeePage.elements.filterField().type("senthil"));
    cy.wait(1000);
    expect(employeePage.elements.filterField().clear());
    cy.wait(5000);

    // expect(employeePage.elements.actionIconBtn.click());
    expect(employeePage.elements.changePwdBtn().click());

  })
});