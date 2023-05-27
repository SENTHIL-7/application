class Employee{
  existData='exist';
  containsData='contain.text';
  dataContent=[
  ]
emplyeeData =[
]
elements={
  addEmployeeBtn: ()=> cy.get('[data-control="addEmployeeBtn"]'),
  routeBackBtn: ()=> cy.get('[data-control="routeBack"]'),
  changePwdBtn: ()=> cy.get('[data-control="changePwd"]'),
  formActions: ()=> cy.get('[data-control="formActions"]'),
  actionIconBtn: ()=> cy.get('[aria-describedby="cdk-describedby-message-thl-1-3"]'),
  firstNameField: ()=> cy.get('[formControlName="firstName"]'),
  lastNameField: ()=> cy.get('[formControlName="lastName"]'),
  emailField: ()=> cy.get('[formControlName="email"]'),
  alternateEmailField: ()=> cy.get('[formControlName="alternateEmail"]'),
  dateOfBirthField: ()=> cy.get('[formControlName="dateOfBirth"]'),
  dateOfJoinField: ()=> cy.get('[formControlName="dateOfJoin"]'),
  designationIdField: ()=> cy.get('[formControlName="designationId"]'),
  designationIdOption: ()=> cy.get('.designationIdOption'),
  roleIdField: ()=> cy.get('[formControlName="roleId"]'),
  roleIdOption: ()=> cy.get('.roleIdOption'),
  passwordField: ()=> cy.get('[formControlName="password"]'),
  formLeftBtn: ()=> cy.get('[data-control="formLeftTrue"]'),
  pageSizeField: ()=> cy.get('.mat-mdc-paginator-page-size-select'),
  pageSizeOptions: ()=> cy.get('mat-option'),
  filterField: ()=> cy.get('[data-control="filter"]'),
  employeeRFSubmitBtn: ()=> cy.get('[data-control="employeeRFSubmit"]'),
  onDeleteBtn: ()=> cy.get('.onDelete'),
  onEditBtn: ()=> cy.get('.onEdit'),
  onViewBtn: ()=> cy.get('.onView'),
}

}

export default Employee;