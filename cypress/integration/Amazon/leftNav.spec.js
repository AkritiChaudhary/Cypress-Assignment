import {Dependencies, RobotHands, RobotEyes} from '../../robots/AmazonRobot';
context('Amazon Testing', () => {
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();
describe('Amazon Shopping', ()=>{
    beforeEach(()=> {
        dependencies.visitAmazon('https://www.amazon.in');
    })
    it('Navigation', ()=> {
        

        robotHands.checkForAllClickElements('.hm-icon');
        robotHands.checkForAllClickElements(':nth-child(15) > .hmenu-item > div');
        
       
        cy.contains('All Mobile Phones').click();
        robotHands.checkForAllClickElements('#nav-logo');
    })
})
})
