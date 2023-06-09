class MenuTiming{
dataContent=[
'Menu Timing',
'List of menus that only available on particular timing',
//import dialog data
'Import Menu Timings',
'Download a sample template to see an example of the format required.',
//export dialog data
'Export Menu Timing',
'Pick your export option',
//paginator
'Items per page',
//no records
'Menus available at specific timing will be listed here..!'
  ];
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
  searchBar: ()=> cy.get('[data-control="search"]'),
  addMenuBtn: ()=> cy.get('[data-control="Add Menu"]'),
  noRecordImg: ()=> cy.get('.empty-img'),
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