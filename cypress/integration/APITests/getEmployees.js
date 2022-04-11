/// <reference types="Cypress" />

describe('Get employees request', () => {

    it('Get employees test', () => {
        cy.request('GET','http://dummy.restapiexample.com/api/v1/employees')
        .then((res)=>{
            cy.log(JSON.stringify(res.body.data[1].employee_name))
            expect(res.body.status).to.eq("success")
            expect(res.body.data[1].employee_name).to.eq("Garrett Winters")
        })
        /*.then((res)=>{
            //const userId=res.data.id
            //cy.log("user Id   "+JSON.stringify(res.data))
        })*/

    })
})

 