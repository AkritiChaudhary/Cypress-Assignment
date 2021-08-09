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

            //robotHands.checkForAllClickElements('#nav-hamburger-menu > i')
            cy.scrollTo(0,2000)
            // robotHands.checkForAllClickElements('#hmenu-content > ul.hmenu.hmenu-visible > li:nth-child(29) > a')
            // cy.get('.hmenu-visible > :nth-child(28) > .hmenu-item').click()
            // robotHands.checkForAllClickElements(':nth-child(3) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner > .a-row > .a-span9 > .a-spacing-none')
            // robotHands.checkForAllClickElements('#ya-myab-plus-address-icon')
            robotHands.checkForAllClickElements('#nav-link-accountList > span')
            robotHands.checkForAllClickElements('#a-page > div.a-container > div > div:nth-child(3) > div:nth-child(1) > a > div > div > div > div.a-column.a-span9.a-span-last > h2')
            robotHands.checkForAllClickElements('#ya-myab-plus-address-icon')

            robotHands.typeTextonId('address-ui-widgets-enterAddressFullName','John Greg');
            robotHands.typeTextonId('address-ui-widgets-enterAddressPhoneNumber','9971082765');
            robotHands.typeTextonId('address-ui-widgets-enterAddressPostalCode','500070');
            robotHands.typeTextonId('address-ui-widgets-enterAddressLine1','1,ABC Towers');
            robotHands.typeTextonId('address-ui-widgets-enterAddressLine2','LB Nagar');
            robotHands.typeTextonId('address-ui-widgets-landmark','Abc Temple');
            robotHands.typeTextonId('address-ui-widgets-enterAddressCity','Telangana');
            robotHands.checkForAllClickElements('#address-ui-widgets-addr-details-address-type-and-business-hours > .a-button-inner > .a-button-text');
            robotHands.checkForAllClickElements('#dropdown1_1');
            robotHands.checkForAllClickElements('.a-button-input')
            robotEyes.forResponse('.a-alert-heading','Address saved')
          
        })
        
    })

})