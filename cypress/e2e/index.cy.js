describe('Todo List Component', () => {
    beforeEach(() => {
        cy.visit('../../../index.html')
    })
  
    it('should add 4 todos, delete the second one, and confirm 3 remaining', () => {
      // Définir les 4 todos à ajouter
      const todos = [
        'Acheter du lait',
        'Faire le ménage',
        'Répondre aux emails',
        'Préparer la présentation'
      ]
      
      // Ajouter les 4 todos
      todos.forEach(todo => {
        cy.get('input[placeholder="What needs to be done?"]').type(todo)
        cy.get('button[type="submit"]').click()
      })
      
      // Vérifier que nous avons bien 4 todos
      cy.get('.flex.items-center.justify-between').should('have.length', 4)
      
      // Vérifier le compteur de tâches
      cy.contains('Nombre de tâche(s) :').contains('4')
      
      // Vérifier le contenu du deuxième todo
      cy.get('.flex.items-center.justify-between').eq(1).contains('Faire le ménage')
      
      // Supprimer le deuxième todo (index 1)
      cy.get('.flex.items-center.justify-between').eq(1).find('button').click()
      
      // Vérifier qu'il reste 3 todos
      cy.get('.flex.items-center.justify-between').should('have.length', 3)
      
      // Vérifier le compteur de tâches mis à jour
      cy.contains('Nombre de tâche(s) :').contains('3')
      
      // Vérifier que le deuxième todo initial n'est plus présent
      cy.get('.flex.items-center.justify-between').each($el => {
        cy.wrap($el).should('not.contain', 'Faire le ménage')
      })
    })
  })