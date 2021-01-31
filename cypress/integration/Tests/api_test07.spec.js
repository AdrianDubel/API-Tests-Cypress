/// <reference types="cypress" />

describe('Register new user', () => {

    it('Test if new user have been created', () => {

        cy.request({
            method: "POST",
            url: "https://reqres.in/api/register",
            body: 
            {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        }).then((response) => {

            expect(response.status).to.eq(200)
            expect(response.duration).to.be.below(1000)
            expect(response.body).to.have.property("id")
            expect(response.body).to.have.property("token")
        
        // save Id and token new user in json file 
        cy.writeFile('cypress/fixtures/New_Register.json',{id: response.body.id, token: response.body.token})

        })
    });
    
});