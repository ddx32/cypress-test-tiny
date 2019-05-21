describe('Cypress doesn\'t see XHRs with URLs ending with ".html"', () => {
  it('works as expected', () => {
    cy.server()
    cy.route('http://example.com/*').as('request')
    cy.visit('passing.html')
    cy.wait('@request').then(xhr => {
      expect(xhr.url).to.equal('http://example.com/passing.htm')
    })
  })

  it('doesn\'t work as expected', () => {
    cy.server()
    cy.route('http://example.com/*').as('request')
    cy.visit('failing.html')
    cy.wait('@request').then(xhr => {
      expect(xhr.url).to.equal('http://example.com/failing.html')
    })
  })
})
