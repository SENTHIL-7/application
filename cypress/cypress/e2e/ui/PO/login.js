class Login{
  existData='exist';
  containsData='contain.text';
  dataContent=[
  ]
loginData =[
  'plancheck@mailinator.com',
  'Admin@1234',
  'https://dev.dashboard.getzenbasket.com/signin',
]
elements={
  formControl: ()=> cy.get('mat-form-field'),
  signInBtn: ()=> cy.get('[data-control="signinfunction"]'),
}

}

export default Login;