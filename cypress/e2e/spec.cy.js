describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#uname').type('test')
    cy.get('#pwd').type('test')
    cy.get('[type="submit"]').click()
    cy.contains('a', 'here').click()
  })
})
