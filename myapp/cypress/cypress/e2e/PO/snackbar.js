class Snackbar{
  existData='exist';
  containsData='contain.text';
  dataContent=[
  ]
  SnackbarData =[
]
elements={
  pipeBtn: ()=> cy.get('[data-control="pipe"]'),
  logoutBtn: ()=> cy.get('[data-control="logout"]'),
  defaultSnackBarBtn: ()=> cy.get('.defaultColor'),
  successSnackBarBtn: ()=> cy.get('.successColor'),
  errorSnackBarBtn: ()=> cy.get('.errorColor'),
  warningSnackBwarningarBtn: ()=> cy.get('.Color'),
  infoSnackBarBtn: ()=> cy.get('.infoColor'),
  snackbarCloseBtn: ()=> cy.get('[data-control="snackbarCloseFuntion"]'),
}

}

export default Snackbar;