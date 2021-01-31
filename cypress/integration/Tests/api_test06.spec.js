/// <reference types="cypress" />

describe('Delete existing user', () => {

    it('Test - delete existing user', () => {

        cy.request("DELETE", "https://reqres.in/api/users/2").then((response) =>{

            expect(response.status).to.eq(204)
            expect(response.duration).to.be.below(1000)
            expect(response.headers).exist
        })
        
    });
    
});