class MenuTiming{
  existData='exist';
  containsData='contain.text';
  headerData=[
    'Menu',
    'Description',
    'Actions'
  ]
elements={
  heading: ()=> cy.get('.header-card-title'),
  headingIcon: ()=> cy.get('.headerIcon'),
  subheading: ()=> cy.get('.header-card-subtitle '),
  ProductsField: ()=> cy.get('[data-control="Products"]'),
  MenuTimingField: ()=> cy.get('[data-control="Menu Timing"]'),
  searchBar: ()=> cy.get('.searchBar'),
  addMenuBtn: ()=> cy.get('[data-control="Add Menu"]'),
  noRecordImg: ()=> cy.get('.new-img'),
  noRecordData: ()=> cy.get('.empty-data-css'),
  tableHeader:()=> cy.get('.cardHeader'),
  paginatorLabel:()=> cy.get('.mat-paginator-page-size-label'),
  paginatorNavFirst:()=> cy.get('.mat-paginator-navigation-first'),
  paginatorNavLast:()=> cy.get('.mat-paginator-navigation-first'),
  paginatorNavPrev:()=> cy.get('.mat-paginator-navigation-previous'),
  paginatorNavNext:()=> cy.get('.mat-paginator-navigation-next'),
  editBtn: ()=> cy.get('[data-control="edit0"]'),
  deleteBtn: ()=> cy.get('[data-control="delete0"]'),
  importCallBtn: ()=> cy.get('[data-control="importCall"]'),
  exportCallBtn: ()=> cy.get('[data-control="exportCall"]'),
  diologTitle: ()=> cy.get('.mat-dialog-title'),
  uploadContainer: ()=> cy.get('.upload-container'),
  descriptionField: ()=> cy.get('[data-control="description"]'),
  addFileBtn: ()=> cy.get('[data-control="import-add-file"]'),
  uploadField: ()=> cy.get('[data-control="import-upload"]'),
  importCancelBtn: ()=> cy.get('[data-control="import-cancal"]'),
  radioGroup: ()=> cy.get('.mat-radio-group'),
  exportCancelBtn: ()=> cy.get('[data-control="export-cancel"]'),
  exportBtn: ()=> cy.get('[data-control="export"]'),
}

}

export default MenuTiming;