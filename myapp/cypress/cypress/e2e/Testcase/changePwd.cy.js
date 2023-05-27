import changePwd from '../PO/changePwd';
const ChangePwdPage = new changePwd();
describe('Move to ChangePwd Page', ()=>{
  it('Move to ChangePwd Page',()=>{
    expect(ChangePwdPage.elements.changePwdBtn().click());
  });
  it('Check whether the oldPasswordField is present or not',()=>{
    expect(ChangePwdPage.elements.oldPasswordField().should(ChangePwdPage.existData));
  });
  it('Check whether the newPasswordField is present or not',()=>{
    expect(ChangePwdPage.elements.newPasswordField().should(ChangePwdPage.existData));
  });
  it('Check whether the confirmPasswordField is present or not',()=>{
    expect(ChangePwdPage.elements.confirmPasswordField().should(ChangePwdPage.existData));
  });
  it('Check whether the submit botton is present or not',()=>{
    expect(ChangePwdPage.elements.submitBtn().should(ChangePwdPage.existData));
  });
  it('Check submit with invalid data',()=>{
    expect(ChangePwdPage.elements.oldPasswordField().type(ChangePwdPage.ChangePwdData[0]));
    expect(ChangePwdPage.elements.newPasswordField().type(ChangePwdPage.ChangePwdData[1]));
    expect(ChangePwdPage.elements.confirmPasswordField().type(ChangePwdPage.ChangePwdData[2]));
    expect(ChangePwdPage.elements.submitBtn().click());
    cy.wait(2000);
  });
  it('Check submit with valid data',()=>{
    expect(ChangePwdPage.elements.oldPasswordField().clear());
    expect(ChangePwdPage.elements.newPasswordField().clear());
    expect(ChangePwdPage.elements.confirmPasswordField().clear());
    expect(ChangePwdPage.elements.oldPasswordField().type(ChangePwdPage.ChangePwdData[0]));
    expect(ChangePwdPage.elements.newPasswordField().type(ChangePwdPage.ChangePwdData[1]));
    expect(ChangePwdPage.elements.confirmPasswordField().type(ChangePwdPage.ChangePwdData[1]));
    expect(ChangePwdPage.elements.submitBtn().click());
    cy.wait(2000);
  });
  it('Move to snackbar page',()=>{
    expect(ChangePwdPage.elements.snackbarBtn().click());
    cy.wait(2000);
  });
  it('Move to pipe page',()=>{
    expect(ChangePwdPage.elements.pipeBtn().click());
    cy.wait(2000);
  });
  it('Move to sign in page',()=>{
    expect(ChangePwdPage.elements.logoutBtn().click());
    cy.wait(2000);
  });
});