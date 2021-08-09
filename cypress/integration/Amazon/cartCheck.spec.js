import {Dependencies, RobotHands, RobotEyes} from '../../robots/AmazonRobot';
context('Amazon Testing', () => {
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();
describe('Amazon Shopping', ()=>{
    beforeEach(()=> {
        dependencies.visitAmazon('https://www.amazon.in/Envias-Womens-Handbag-Peach/dp/B08H19JNLL/?_encoding=UTF8&pd_rd_w=eIJIT&pf_rd_p=05e267ad-52e2-4b6c-9c9a-2cdb3936e00f&pf_rd_r=YYZCH3604JR5J3DWDH5E&pd_rd_r=3d807a37-fc65-4b98-91ec-75a714477085&pd_rd_wg=jffPj&ref_=pd_gw_unk')
    })
    it('Add items and verify quantity', () => {
            let addedValue
            // get quantity while adding
            cy.get('#quantity').then((qty) => {
                addedValue = qty.text()
            })
            robotHands.checkForAllClickElements('#add-to-cart-button');
            cy.get('[type="image"]').click()
            robotHands.checkForAllClickElements('#nav-cart');
            //cy.get('[type="image"]').click()
            robotEyes.forResponse('#nav-cart-count','1');


        })
    })
})