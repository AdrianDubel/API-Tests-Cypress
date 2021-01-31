/// <reference types="cypress" />

describe('Single user not found', () => {

    it('Test - Single user not found', () => {

        cy.request({
            
            method: 'GET', 
            url: 'https://reqres.in/api/users/23', 
            failOnStatusCode: false
        }
            
            ).then((response) => {

            expect(response.status).to.eq(404)
            expect(response.duration).to.be.below(1000)

        })
        
    });
    
});