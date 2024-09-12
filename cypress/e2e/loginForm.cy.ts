describe.only('Login Test', () => {
  it('Login successfully with cy.request', () => {
    cy.request('/api/auth/csrf').then((response) => {
      const csrfToken = response.body.csrfToken

      cy.request({
        method: 'POST',
        url: '/api/auth/callback/credentials',
        form: true,
        body: {
          csrfToken,
          email: Cypress.env('email'),
          password: Cypress.env('password'),
        },
      }).then((loginResponse) => {
        expect(loginResponse.status).to.eq(200)

        cy.visit('/trips')
        cy.contains('Trip', { matchCase: false })
      })
    })
  })
})

describe('Login Test with JWT using cy.type', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('Logs in and accesses a protected route', () => {
    cy.intercept('POST', '/api/auth/csrf').as('loginRequest')

    cy.getDataTest('login-email').type(Cypress.env('email'))
    cy.getDataTest('login-password').type(Cypress.env('password'))

    cy.get('form').submit()

    cy.wait('@loginRequest', { requestTimeout: 5000 })

    cy.contains('welcome', { matchCase: false })
    cy.location('pathname').should('eq', '/trips')
  })
})
