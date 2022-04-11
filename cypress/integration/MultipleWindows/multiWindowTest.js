/// <reference types="Cypress" />
const url=`https://nxtgenaiacademy.com/`;
/* Reference 
https://github.com/cypress-io/cypress-example-recipes/blob/94ae974f41ef579cdd4cb184ed852b623ef252f9/examples/stubbing-spying__window/README.md
https://github.com/cypress-io/cypress-example-recipes/blob/94ae974f41ef579cdd4cb184ed852b623ef252f9/examples/stubbing-spying__window/README.md
*/

describe('Multiple windowes', () => {
    it('should test multiple windows', () => {
        cy
        .visit('https://nxtgenaiacademy.com/multiplewindows/')
        cy
        .get('[name="newbrowsertab453"]')
        .click();
        cy
        .window().then((win) => {
            cy.stub(win, 'open').as('windowOpen')
        })
        cy
        .get('.custom-logo').should('be.visible')
    })
    it.only('should test multiple windows', () => {
        cy.visit('https://nxtgenaiacademy.com/multiplewindows/')
        //cy.get('[name="newbrowserwindow123"]').click();
        cy.get('[name="newbrowserwindow123"]').then(function ($a) {
            // extract the fully qualified href property
            const href = $a.prop('href')
    
            // make an http request for this resource
            // outside of the browser
            cy.request(href)
            // drill into the response body
            .its('body')
    
            // and assert that its contents have the <html> response
            .and('include', '<h2>elementor-heading-title</h1')
          })
    })
    it('should test multiple windows', () => {
        cy.visit('https://nxtgenaiacademy.com/multiplewindows/')
        cy.get('[name="newbrowsertab453"]').click();
        cy.window().then((win) => {
			cy.stub(win, 'open', url => {
				win.location.href = url;
			}).as("popup")
		});

        cy.get('.custom-logo').should('be.visible')
       // cy.visit(url)
        //cy.get('.elementor-heading-title').should('be.visible')

    })
    
})

 