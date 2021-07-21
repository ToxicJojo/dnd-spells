describe('Bottom Bar', () => {
  it('has three navigation elements', () => {
    cy.visit('/')
    cy.get('.navigation-bar > ul').children().should('have.length', 3)
  })

  describe('Navigation', () => {
    it('navigates to spell search correctly', () => {
      cy.visit('/')
      cy.get('.navigation-bar').children().get('a').eq(0).click()
      cy.url().should('contain', '/')
    })

    it('navigates to spell list correctly', () => {
      cy.visit('/')
      cy.get('.navigation-bar').children().get('a').eq(1).click()
      cy.url().should('contain', '/spells')
    })

    it('navigates to spell book correctly', () => {
      cy.visit('/')
      cy.get('.navigation-bar').children().get('a').eq(2).click()
      cy.url().should('contain', '/spell-book')
    })
  })
})
