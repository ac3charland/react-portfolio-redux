import NavBar from '../page/nav-bar'
import HomePage from '../page/home-page'

context('Page Navigation', () => {
    beforeEach(() => {
        cy.server()
        // cy.intercept('https://substackapi.com/widget.js', [])
    })

    it('navigates to proper pages with navbar links', () => {
        cy.visit('/')
        cy.get(HomePage.wrapper)

        cy.get(NavBar.projectsLink).click()
        cy.get(HomePage.projectsHeading).should('have.focus')

        cy.get(NavBar.technologiesLink).click()
        cy.get(HomePage.technologiesHeading).should('have.focus')

        cy.get(NavBar.contactLink).click()
        cy.get(HomePage.contactHeading).should('have.focus')

        cy.get(NavBar.homeLink).click()
        cy.get(NavBar.homeLink).should('have.focus')
    })
})