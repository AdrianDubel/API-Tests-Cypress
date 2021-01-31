/// <reference types="cypress" />

describe('Get list of users', () => {

    it('Test request to get list of users', () => {

        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {

            expect(response.status).to.eq(200)
            expect(response.duration).to.be.below(1000)
            expect(response).to.have.property('headers')
            expect(response).property('body').to.have.property('data').to.have.length(6)

            
        })
    })

    it('Save list of users to json file', () => {

        cy.request('https://reqres.in/api/users?page=2')
          .its('body')
          .its('data')
          .as('usersdata').then((getusers) =>{

            cy.writeFile('cypress/fixtures/users.json', {users: getusers})

          }) 
        
    });
    
});