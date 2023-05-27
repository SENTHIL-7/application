import snackbar from '../PO/snackbar';
const snackbarPage = new snackbar();
describe('Move to snackbar Page', ()=>{
  it('Check whether the snackbar butttob is present or not',()=>{
    expect(ChangePwdPage.elements.oldPasswordField().should(ChangePwdPage.existData));
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