/// <reference types="cypress" />

describe('Successful login', () => {

    it('Test- Successful login', () => {
        
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            body: 
            {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        }).then((response) =>{

            expect(response.status).to.eq(200)
            expect(response.duration).to.be.below(1000)
            expect(response.body).to.have.property('token')
        })
    })
    
})