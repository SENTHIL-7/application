class MenuTiming{
  dataContent=[
    "No Records Found!"
  ]
elements={
  ProductsField: ()=> cy.get('[data-control="Products"]'),
  MenuTimingField: ()=> cy.get('[data-control="Menu Timing"]'),
  searchBar: ()=> cy.get('[data-control="search"]'),
  noRecordImg: ()=> cy.get('.empty-img'),
  noRecordData: ()=> cy.get('.empty-data-css'),
}
}
export default MenuTiming;