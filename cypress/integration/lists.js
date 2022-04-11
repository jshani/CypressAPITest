/// <reference types="Cypress" />
const url=`https://the-internet.herokuapp.com/`;

describe('Test list', () => {
    it('should test short lists', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy
        .visit(url)
        cy
        .get('ul')
        .find('li').then(items => {
           expect(items[0]).to.contain.text('A/B Testing')
           expect(items[4]).to.contain.text('Challenging DOM')
        })
       
    })
    it.only('should test long lists', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        const itemList=["A/B Testing Add/Remove Elements Basic Auth (user and pass: admin) Broken Images Challenging DOM Checkboxes Context Menu Digest Authentication (user and pass: admin) Disappearing Elements Drag and Drop Dropdown Dynamic Content Dynamic Controls Dynamic Loading Entry Ad Exit Intent File Download File Upload Floating Menu Forgot Password Form Authentication Frames Geolocation Horizontal Slider Hovers Infinite Scroll Inputs JQuery UI Menus JavaScript Alerts JavaScript onload event error Key Presses Large & Deep DOM Multiple Windows Nested Frames Notification Messages Redirect Link Secure File Download Shadow DOM Shifting Content Slow Resources Sortable Data Tables Status Codes Typos WYSIWYG Editor"]
        cy
        .visit(url)
        cy
        .get('ul').then(items => {
            cy.log(items[0].textContent)
        })
       
    })
    
})



 