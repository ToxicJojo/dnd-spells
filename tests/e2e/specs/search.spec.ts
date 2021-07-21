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

  it('shows the level of the spell results', () => {
    cy.visit('/')
    cy.get('.spell-search__input').clear().type('Acid')
    cy.get('ul.spell-search__results').children().contains('Cantrip')
    cy.get('ul.spell-search__results').children().contains('2nd Level')
  })

  it('doesn\'t show the spell details without interaction', () => {
    cy.visit('/')
    cy.get('.spell-search__input').clear().type('Acid')
    cy.get('.spell-info').should('not.exist')
  })

  it('can open the spell details', () => {
    cy.visit('/')
    cy.get('.spell-search__input').clear().type('Acid')
    cy.get('.spell-search-result__preview > svg').first().click()
    cy.get('.spell-info')
  })

  it('shows the spells details in the detail view', () => {
    cy.visit('/')
    cy.get('.spell-search__input').clear().type('Acid')
    cy.get('.spell-search-result__preview > svg').first().click()
    cy.get('.spell-info').contains('1 action')
    cy.get('.spell-info').contains('60 feet')
    cy.get('.spell-info').contains('Instantaneous')
    cy.get('.spell-info').contains('V,S')
  })
})
