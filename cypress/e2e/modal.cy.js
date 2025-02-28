describe('Modal Component', () => {
  beforeEach(() => {
    cy.visit('../../../modal.html')
  })

  it('should open the modal when clicking display button', () => {
    // La modale devrait être invisible au début
    cy.get('[x-show="isModalVisible"]').should('not.be.visible')
    
    // Cliquer sur le bouton Display
    cy.contains('button', 'Display').click()
    
    // Vérifier que la modale est maintenant visible
    cy.get('[x-show="isModalVisible"]').should('be.visible')
  })

  it('should close the modal when clicking outside', () => {
    // Ouvrir d'abord la modale
    cy.contains('button', 'Display').click()
    cy.get('[x-show="isModalVisible"]').should('be.visible')
    
    // Cliquer en dehors de la modale (sur l'overlay)
    cy.get('[x-show="isModalVisible"]').click('topLeft', {force: true})
    
    // Vérifier que la modale n'est plus visible
    cy.get('[x-show="isModalVisible"]').should('not.be.visible')
  })

  it('should contain Lorem Ipsum text', () => {
    // Ouvrir la modale
    cy.contains('button', 'Display').click()
    
    // Vérifier que la modale contient le texte Lorem Ipsum
    cy.get('[x-show="isModalVisible"]').within(() => {
      cy.contains('h2', 'Lorem Ipsum').should('be.visible')
      cy.contains('p', 'Lorem ipsum dolor sit amet').should('be.visible')
    })
  })
})