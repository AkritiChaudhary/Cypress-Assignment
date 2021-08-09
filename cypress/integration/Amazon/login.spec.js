import {Dependencies, RobotHands, RobotEyes} from '../../robots/AmazonRobot';
context('Amazon Testing', () => {
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();

    describe('Amazon Shopping',()=>{
        beforeEach(()=>{
            dependencies.visitAmazon('https://www.amazon.in')
        })

        it('Open Amazon',()=>{
            //robotHands.hover('nav-link-accountList')
            cy.get('#nav-link-accountList')
            robotHands.amazonSignIn()
            robotEyes.forResponse('#nav-link-accountList-nav-line-1','Hello, akriti')
          
        })
        
    })

})