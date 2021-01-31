/// <reference types="cypress" />

describe('Create new user and verify if is created', () => {

    it('Create new user',  () => {

        cy.request('POST', 'https://reqres.in/api/users', 
        
        {"name": "Dave", "job": "Developer"})
          
          .then((response) => {
            
            //Verify if new user is created
            expect(response.status).to.eq(201)
            expect(response.duration).to.be.below(1000)
            expect(response.body).to.have.property('name', 'Dave')
            expect(response.body).to.have.property('job', "Developer")
          })

    })

  
})