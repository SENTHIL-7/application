class AddMenuTiming{
  dataContent=[
    'Add Menu Timing',
    'Add your store menu timing here..',
    'Open location to give menu available timing in particular location'
  ];
  dialogHeader=[
    'Are you sure?'
  ]
  dialogContent=[
    'You have unsaved changes. Are you sure you want to leave this page?'
  ]

elements={
  heading: ()=> cy.get('.header-card-title'),
  headingIcon: ()=> cy.get('.headerIcon'),
  subheading: ()=> cy.get('.header-card-subtitle '),
  addMenuBtn: ()=> cy.get('[data-control="Add Menu"]'),
  descriptionField: ()=> cy.get('[data-control="description"]'),
  menuCategoriesField: ()=> cy.get('[data-control="menuCategories"]'),
  menuNameField: ()=> cy.get('[data-control="menuName"]'),
  locationName: ()=> cy.get('.location-name'),
  locationNote: ()=> cy.get('.location-note-section'),
  locationPanel: ()=> cy.get('[data-control="workingHours-expansion-panel"]'),
  saveBtn: ()=> cy.get('[data-control="Save"]'),
  cancelBtn: ()=> cy.get('[data-control="Cancel"]'),
  availableToggle: ()=> cy.get('[data-control="isMenuAvailable"]'),
  menuClosedDaysField: ()=> cy.get('[data-control="menuClosedDays"]'),
  addWorkingHoursField: ()=> cy.get('[data-control="addWorkingHours"]'),
  daysField: ()=> cy.get('[data-control="days"]'),
  startTimeField: ()=> cy.get('[data-control="startTime"]'),
  endTimeField: ()=> cy.get('[data-control="endTime"]'),
  removeWorkingHoursField: ()=> cy.get('[data-control="removeWorkingHours"]'),
  rightBtn: ()=> cy.get('[data-control="rightbutton"]'),
  leftBtn: ()=> cy.get('[data-control="leftbutton"]'),
  dialogHeader: ()=> cy.get('.dialog-header'),
  dialogSubContent: ()=> cy.get('.dialog-sub-content'),
}

}

export default AddMenuTiming;