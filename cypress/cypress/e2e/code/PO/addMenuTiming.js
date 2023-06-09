class AddMenuTiming{
  dialogHeader=[
    'Success',
    'Confirmation',
  ]
  dialogContent=[
    'Menu Timing saved successfully',
    'Menu Timing updated successfully.',
    'Are you sure you want to remove this menu timing?',
    'Menu timing removed successfully.'
  ]
elements={
  ProductsField: ()=> cy.get('[data-control="Products"]'),
  MenuTimingField: ()=> cy.get('[data-control="Menu Timing"]'),
  selectOpt: ()=> cy.get('.mat-option-text'),
  addMenuBtn: ()=> cy.get('[data-control="Add Menu"]'),
  descriptionField: ()=> cy.get('[data-control="description"]'),
  menuCategoriesField: ()=> cy.get('[data-control="menuCategories"]'),
  menuNameField: ()=> cy.get('[data-control="menuName"]'),
  locationPanel: ()=> cy.get('[data-control="locationPanel Test"]'),
  saveBtn: ()=> cy.get('[data-control="Save"]'),
  cancelBtn: ()=> cy.get('[data-control="Cancel"]'),
  availableToggle: ()=> cy.get('[data-control="isMenuAvailable"]'),
  menuClosedDaysField: ()=> cy.get('[data-control="menuClosedDays"]'),
  addWorkingHoursField: ()=> cy.get('[data-control="addWorkingHours"]'),
  daysField: ()=> cy.get('[data-control="days"]'),
  startTimeField: ()=> cy.get('[data-control="startTime"]'),
  hourClock: ()=> cy.get('.clock-face__number'),
  timepickerOkButton: ()=> cy.get('.timepicker-button'),
  endTimeField: ()=> cy.get('[data-control="endTime"]'),
  successIcon: ()=> cy.get('.checkmark'),
  dialogHeader: ()=> cy.get('.dialog-header'),
  dialogSubContent: ()=> cy.get('.dialog-sub-content'),
  rightBtn: ()=> cy.get('[data-control="rightbutton"]'),
  leftBtn: ()=> cy.get('[data-control="leftbutton"]'),
  searchBar: ()=> cy.get('[data-control="search"]'),
  editBtn: ()=> cy.get('[data-control="edit0"'),
  deleteBtn: ()=> cy.get('[data-control="delete0"'),
  dialogDeleteIcon: ()=> cy.get('.dialog-content-icon'),
  noRecordImg: ()=> cy.get('.new-img'),
  noRecordData: ()=> cy.get('.empty-data-css'),
  tableHeader:()=> cy.get('.cardHeader'),
  paginatorSizeBtn:()=> cy.get('.mat-paginator-page-size-select'),
  paginatorSizeOpt:()=> cy.get('.mat-option'),
  isTable:()=> cy.get('.cardHeader'),
}

}

export default AddMenuTiming;