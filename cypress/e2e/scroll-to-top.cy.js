describe('Scroll To Top Component', () => {
    beforeEach(() => {
        cy.visit('../../../scroll-to-top.html')
    })
  
    it('should show the scroll-to-top button when scrolling down', () => {
      // Au début, le bouton ne devrait pas être visible (car nous sommes en haut de la page)
      cy.get('button[class*="p-3 bg-black bg-opacity-10"]').should('not.be.visible')
      
      // Cliquer sur le bouton "Scroll" pour descendre
      cy.contains('button', 'Scroll').click()
      
      // Attendre que la page finisse de scroll
      cy.wait(1000)
      
      // Vérifier que le bouton scroll-to-top est maintenant visible
      cy.get('button[class*="p-3 bg-black bg-opacity-10"]').should('be.visible')
    })
  
    it('should scroll back to top and hide button when clicked', () => {
      // D'abord, faire défiler la page vers le bas
      cy.contains('button', 'Scroll').click()
      
      // Attendre que la page finisse de scroll
      cy.wait(1000)
      
      // Vérifier que le bouton est visible
      cy.get('button[class*="p-3 bg-black bg-opacity-10"]').should('be.visible')
      
      // Cliquer sur le bouton de retour en haut
      cy.get('button[class*="p-3 bg-black bg-opacity-10"]').click()
      
      // Attendre que la page finisse de remonter
      cy.wait(1000)
      
      // Vérifier que nous sommes revenus en haut (position Y proche de 0)
      cy.window().its('scrollY').should('be.closeTo', 0, 10)
      
      // Vérifier que le bouton n'est plus visible
      cy.get('button[class*="p-3 bg-black bg-opacity-10"]').should('not.be.visible')
    })
  })