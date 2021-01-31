/// <reference types="cypress" />

describe('Update info about created user', () => {

    it('Test - Update info about created user', () => {

        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body: {
                "name": "Paul",
                "job": "zion resident"
            }

        }).then((response) => {

            expect(response.status).to.eq(200)
            expect(response.duration).to.be.below(1000)
            expect(response.body).to.have.property('name').eq('Paul')
            expect(response.body).to.have.property('job').eq("zion resident")
        })

        
    }) 
      
});
    