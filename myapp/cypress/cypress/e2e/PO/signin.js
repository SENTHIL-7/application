class SignIn{
  existData='exist';
  containsData='contain.text';
  dataContent=[
    'SignIn',
    "This field is required"
  ]
signInData =[
  'apsenthilkumar2001@gmail.com',
  '1234',
  'http://localhost:4200/signin',
  'invaliduser@gmail.com',
  '4542'
]
elements={
  signInHeading: ()=> cy.get('.main-heading'),
  emailIdField: ()=> cy.get('[formControlName="email"]'),
  passwordField: ()=> cy.get('[formControlName="password"]'),
  signInBtn: ()=> cy.get('[data-control="signInFunction"]'),
  showPassword: ()=> cy.get('[data-control="showPassword"]'),
  snackbarCloseBtn: ()=> cy.get('[data-control="snackbarCloseFuntion"]'),
  fieldRequiredError: ()=> cy.get('[data-control="fieldRequiredError"]'),
}

}

export default SignIn;