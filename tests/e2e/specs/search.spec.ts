describe('Spell Search', () => {
  it('shows no results if the search field is empty', () => {
    cy.visit('/')
    cy.get('.spell-search__input').clear()
    cy.get('ul.spell-search__results').children().should('have.length', 0)
  })

  it('shows the correct amount of results', () => {
    cy.visit('/')
    cy.get('.spell-search__input').clear().type('Fireball')
    cy.get('ul.spell-search__results').children().should('have.length', 2)

    cy.get('.spell-search__input').clear().type('Fire')
    cy.get('ul.spell-search__results').children().should('have.length', 7)
  })

  it('shows the names of the spell results', () => {
    cy.visit('/')
    cy.get('.spell-search__input').clear().type('Teleport')
    cy.get('ul.spell-search__results').children().contains('Teleport')
    cy.get('ul.spell-search__results').children().contains('Teleportation Circle')
  })

  it('shows the school of the spell results', () => {
    cy.visit('/')
    cy.get('.spell-search__input').clear().type('Magic Circle')
    cy.get('ul.spell-search__results').children().contains('Abjuration')

    cy.get('.spell-search__input').clear().type('Color Spray')
    cy.get('ul.spell-search__results').children().contains('Illusion')
  })
})
