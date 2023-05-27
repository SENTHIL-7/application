class ChangePwd{
  existData='exist';
  containsData='contain.text';
  dataContent=[
  ]
  ChangePwdData =[
    'password',
    '1234',
    '4567'
]
elements={
  changePwdBtn: ()=> cy.get('[data-control="changePwd"]'),
  pipeBtn: ()=> cy.get('[data-control="pipe"]'),
  logoutBtn: ()=> cy.get('[data-control="logout"]'),
  oldPasswordField: ()=> cy.get('[formControlName="oldPassword"]'),
  newPasswordField: ()=> cy.get('[formControlName="newPassword"]'),
  confirmPasswordField: ()=> cy.get('[formControlName="confirmPassword"]'),
  submitBtn: ()=> cy.get('[data-control="Submit"]'),
  snackbarBtn: ()=> cy.get('[data-control="snackbar"]'),
}

}

export default ChangePwd;