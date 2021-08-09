import {Dependencies, RobotHands, RobotEyes} from '../../robots/AmazonRobot';
context('Amazon Testing', () => {
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();

    describe('Amazon Shopping',()=>{
        beforeEach(()=>{
            dependencies.visitAmazon('https://www.amazon.in')
        })
            
            it('add payment option', () => {
                robotHands.amazonSignIn()
                
                robotHands.checkForAllClickElements('#nav-link-accountList');
                robotHands.checkForAllClickElements(':nth-child(3) > :nth-child(2) > .ya-card__whole-card-link > .a-box > .a-box-inner');
                robotHands.checkForAllClickElements('.a-button-input');
    
            })
        })
    })
    
        