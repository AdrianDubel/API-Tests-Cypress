/// <reference types="cypress" />

describe('Unsuccessful login', () => {

    it('Test - Unsuccessful login', () => {

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            failOnStatusCode: false,
            body: 
            {
                "email": "peter@klaven"
            }
        }).then((response) => {

            expect(response.status).to.eq(400)
            expect(response.duration).to.be.below(1000)
            expect(response.body).to.have.property('error').eq('Missing password')

        })
        
    })
    
})