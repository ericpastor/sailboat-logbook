describe('Elemntary tests', () => {
  beforeEach(()=>{
    cy.visit('/')
  })
  it('Contains the App name', () => {
  })
  it('Modal woks correctly', () => {
    cy.getDataTest('home-page').should('not.contain.text', `Some street in Finland`)
    cy.getDataTest('contact-btn').click()
    cy.contains(/Some street in Finland/i).should('be.visible')
    cy.getDataTest('close-btn').click()
    cy.getDataTest('home-page').should('not.contain.text', `Some street in Finland`)
  })
})