describe('Smart Tag Component', () => {
    beforeEach(() => {
        cy.visit('../../../smart-tag.html')
    })
  
    it('should show tag on hover of See more button', () => {
      // Le tag devrait être invisible au début
      cy.get('.absolute.top-11').should('not.be.visible')
      
      // Hover sur le bouton "See more"
      cy.get('.bg-yellow-100.text-yellow-500').trigger('mouseover')
      
      // Vérifier que le tag est visible
      cy.get('.absolute.top-11').should('be.visible')
    })
  
    it('should hide tag when mouse leaves the hover area', () => {
      // Hover sur le bouton pour afficher le tag
      cy.get('.bg-yellow-100.text-yellow-500').trigger('mouseover')
      
      // Vérifier que le tag est visible
      cy.get('.absolute.top-11').should('be.visible')
      
      // Sortir du bouton en allant sur un autre élément
      cy.get('body').trigger('mouseover', { force: true })
      
      // Vérifier que le tag n'est plus visible
      cy.get('.absolute.top-11').should('not.be.visible')
    })
  })