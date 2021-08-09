import {Dependencies, RobotHands, RobotEyes} from '../../robots/AmazonRobot';
context('Amazon Testing', () => {
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();

    describe('Amazon Shopping',()=>{
        beforeEach(()=>{
            dependencies.visitAmazon('https://www.amazon.in')
        })

        it('Past Year Orders',()=>{
            //robotHands.hover('nav-link-accountList')
            cy.get('#nav-link-accountList')
            robotHands.amazonSignIn()
            robotHands.checkForAllClickElements('#nav-hamburger-menu')
            cy.scrollTo(0,2000)
            // cy.get(':nth-child(31) > .hmenu-item')
            // //robotHands.checkForAllClickElements('#a-page > div.a-container > div > div:nth-child(2) > div:nth-child(1) > a > div')
            // //cy.get(':nth-child(2) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner').click()
            // robotHands.checkForAllClickElements('#a-autoid-1-announce > span')
            // robotHands.checkForAllClickElements('#orderFilter_3')
            robotHands.checkForAllClickElements('#nav-link-accountList > span')
            robotHands.checkForAllClickElements('#a-page > div.a-container > div > div:nth-child(2) > div:nth-child(1) > a > div')
            robotHands.checkForAllClickElements('#a-autoid-1')
            robotHands.checkForAllClickElements('#orderFilter_3')
            robotEyes.forResponse('.num-orders','0 orders')

        })
    })
})        