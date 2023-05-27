 describe('Data driven automation framwork test', ()=>{
    before(function() {
        cy.fixture('Credentials').then(function(loginData){
            this.loginData=loginData
        })
        
    })
    it('1st login with data driven',function(){
        cy.visit("https://mail.google.com/")
        cy.get('input[type="email"]').type(this.loginData.email)
        cy.get('#identifierNext').click()
        cy.get('input[type="password"]').type(this.loginData.password)
        cy.contains('Next').click()
    })

 })