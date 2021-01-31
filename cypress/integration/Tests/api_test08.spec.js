/// <reference types="cypress" />

describe('REGISTER - UNSUCCESSFUL', () => {

    it('Test - response if unsuccessful register', () => {

        cy.request({
            method: 'POST',
            url: "https://reqres.in/api/register",
            failOnStatusCode: false,
            body: 
            { 
                "email": "sydney@fife"
            },
        }).then((response) => {

            expect(response.status).to.eq(400)
            expect(response.duration).to.be.below(1000)
            expect(response.body).to.have.property('error').eq('Missing password')

        })
        
    })
    
})
