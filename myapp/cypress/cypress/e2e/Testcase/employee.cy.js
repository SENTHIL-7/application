import employee from '../PO/employee';
const employeePage = new employee();
describe('Move to employee dashboard', ()=>{

  it('Check whether the signin heading is present or not',()=>{
    expect(employeePage.elements.addEmployeeBtn().should(employeePage.existData));
  });
  it('Move add employee page',()=>{
    expect(employeePage.elements.addEmployeeBtn().click());
  });
  it('Check whether the signin heading is present or not',()=>{
    expect(employeePage.elements.routeBackBtn().should(employeePage.existData));
  });
  it("Check whether the form field is present or not",()=>{
    expect(employeePage.elements.firstNameField().should(employeePage.existData));
    expect(employeePage.elements.lastNameField().should(employeePage.existData));
    expect(employeePage.elements.emailField().should(employeePage.existData));
    expect(employeePage.elements.alternateEmailField().should(employeePage.existData));
    expect(employeePage.elements.dateOfBirthField().should(employeePage.existData));
    expect(employeePage.elements.dateOfJoinField().should(employeePage.existData));
    expect(employeePage.elements.designationIdField().should(employeePage.existData));
    expect(employeePage.elements.roleIdField().should(employeePage.existData));
    expect(employeePage.elements.passwordField().should(employeePage.existData));
   })
  it('form field type',()=>{
    expect(employeePage.elements.firstNameField().type("demo"));
    expect(employeePage.elements.lastNameField().type("R"));
    expect(employeePage.elements.emailField().type("demo@gamil.com"));
    expect(employeePage.elements.alternateEmailField().type("balu123@gamil.com"));
    expect(employeePage.elements.dateOfBirthField().type("2/15/2001"));
    expect(employeePage.elements.dateOfJoinField().type("5/1/2023"));
    expect(employeePage.elements.designationIdField().click());
    expect(employeePage.elements.designationIdOption().eq(2).click());
    expect(employeePage.elements.roleIdField().click());
    expect(employeePage.elements.roleIdOption().eq(2).click());
    expect(employeePage.elements.passwordField().type("1234"));
    
  });
  it('add employee submit function',()=>{
    expect(employeePage.elements.employeeRFSubmitBtn().click());
    cy.wait(2000);
  })
  // it('Move employee table page',()=>{
  //   expect(employeePage.elements.routeBackBtn().click());
  //   cy.wait(1000);
  //   // expect(employeePage.elements.formLeftBtn().click());

  // });
  it('Move employee table page',()=>{
    expect(employeePage.elements.routeBackBtn().click());
    cy.wait(2000);
    // expect(employeePage.elements.formLeftBtn().click());
   
  });
  it('update  function',()=>{
    expect(employeePage.elements.filterField().type("demo"));
    cy.wait(2000);
    expect(employeePage.elements.onEditBtn().click());
    cy.wait(2000);
    expect(employeePage.elements.routeBackBtn().click());
    cy.wait(2000);
  });
  it('view  function',()=>{
    expect(employeePage.elements.filterField().type("demo"));
    cy.wait(2000);
    expect(employeePage.elements.onViewBtn().click());
    cy.wait(2000);
    expect(employeePage.elements.routeBackBtn().click());
    cy.wait(2000);
  });
  it('delete function',()=>{
    expect(employeePage.elements.filterField().type("demo"));
    cy.wait(2000);
    expect(employeePage.elements.onDeleteBtn().click());
    cy.wait(2000);
    expect(employeePage.elements.formLeftBtn().click());
    cy.wait(2000);
    expect(employeePage.elements.filterField().clear());
  });

  it('page size',()=>{
    expect(employeePage.elements.pageSizeField().click());
    cy.wait(2000);
    expect(employeePage.elements.pageSizeOptions().eq(1).click())
    cy.wait(2000);
    expect(employeePage.elements.filterField().type("senthil"));
    cy.wait(2000);
    expect(employeePage.elements.filterField().clear());
    cy.wait(2000);
  })
});