import logIn from '../PO/login';
const logInPage = new logIn();
describe('LogIn Page', ()=>{
  it("launch the ZenBasket",()=>{
    cy.visit(logInPage.loginData[2]);
    cy.wait(1000);
  })
  it("Check  login field",()=>{
 
    expect(logInPage.elements.formControl().eq(0).type(logInPage.loginData[0]));
    expect(logInPage.elements.formControl().eq(1).type(logInPage.loginData[1]));
    expect(logInPage.elements.signInBtn().click());
    // cy.wait(10000);
  });
});