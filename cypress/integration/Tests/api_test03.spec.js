/// <reference types="cypress" />

describe('Create new user than check if exist and delete', () => {

    it('Create new user', () => {

        cy.request({

            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "Adam",
                "job": "Mechanic"
            }
        }).then((response) => {
            expect(response.status).eq(201)
            expect(response.duration).to.be.below(1000)
            expect(response.body).to.have.property('name').eq('Adam')
            expect(response.body).to.have.property('job').eq('Mechanic')
            expect(response.body).to.have.property('id')

            // save new user id in json
            cy.writeFile('cypress/fixtures/User_id.json', {id: response.body.id})

        })

    });
    
})
