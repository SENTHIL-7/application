import signIn from '../PO/signin';
const signInPage = new signIn();

describe('SignIn Page', ()=>{
  it("launch the myapp application",()=>{
    cy.visit(signInPage.signInData[2]);
    cy.wait(2000);
  })
  it('Check whether the signin heading is present or not',()=>{
    expect(signInPage.elements.signInHeading().should(signInPage.existData));
    expect(signInPage.elements.signInHeading().should(signInPage.containsData,signInPage.dataContent[0]));
  })
  it("Check whether the email id field is present or not",()=>{
   expect(signInPage.elements.emailIdField().should(signInPage.existData))
  })
  it("Check whether the password field is present or not",()=>{
   expect(signInPage.elements.passwordField().should(signInPage.existData))
  })
  it("Check whether the show password icon is present or not",()=>{
   expect(signInPage.elements.showPassword().should(signInPage.existData))
  })
  it("Check whether the signin button is present or not",()=>{
   expect(signInPage.elements.signInBtn().should(signInPage.existData))
  })
  it("Check signin in invalid user ",()=>{
    expect(signInPage.elements.emailIdField().type(signInPage.signInData[3]));
    expect(signInPage.elements.passwordField().type(signInPage.signInData[4]));
    expect(signInPage.elements.signInBtn().click());
    cy.wait(2000) ;
    expect(signInPage.elements.snackbarCloseBtn().click());
    cy.wait(2000) ;
    expect(signInPage.elements.emailIdField().clear());
    expect(signInPage.elements.passwordField().clear());
  })
  it("Check whether the  form field required error message is present or not",()=>{
    expect(signInPage.elements.fieldRequiredError().should(signInPage.existData))
    expect(signInPage.elements.fieldRequiredError().should(signInPage.containsData,signInPage.dataContent[1]))
   })
  it("Check signin in valid user ",()=>{
 
    expect(signInPage.elements.emailIdField().type(signInPage.signInData[0]));
    expect(signInPage.elements.passwordField().type(signInPage.signInData[1]));
    expect(signInPage.elements.signInBtn().click());
  })
})
// describe('SignIn Page in invalid data', ()=>{
//   it("Check signin in valid user ",()=>{
//     cy.visit(signInPage.signInData[2]);
//     cy.wait(2000);
//     // expect(signInPage.elements.emailIdField().type(signInPage.signInData[3]));
//     // expect(signInPage.elements.passwordField().type(signInPage.signInData[4]));
//     expect(signInPage.elements.signInBtn().click());
//   })
// });