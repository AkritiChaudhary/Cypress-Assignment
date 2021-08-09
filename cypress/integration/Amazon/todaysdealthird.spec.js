import {Dependencies, RobotHands, RobotEyes} from '../../robots/AmazonRobot';
context('Amazon Testing', () => {
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();
describe('Amazon Shopping', ()=>{
    beforeEach(()=> {
        dependencies.visitAmazon('https://www.amazon.in');
    })
    it('Getting third from todays deals', ()=> {
        //robotHands.checkForAllClickElements('#nav-xshop > a:nth-child(12)');
        
        //robotHands.checkForAllClickElements('#deals-shoveler-ns_EVSZ02GRBX1XSXHGX2S1_3126_ > div.a-section.as-title-block > span > a')
        //robotHands.checkForAllClickElements('')
        cy.scrollTo(0,2000)
        //cy.get('#e0fce9a8 > .a-list-item > .deals-shoveler-card > .deals-shoveler-card-image > .a-link-normal > .product-image').click()
        robotHands.checkForAllClickElements('#H_WjNMOevCxkbgfRmGkIeA > div.a-section.a-spacing-none.feed-carousel > div > ul > li:nth-child(2) > span > div.a-section.a-spacing-small > a > div > img')
        robotEyes.forResponse('#H_WjNMOevCxkbgfRmGkIeA > div.a-section.a-spacing-none.feed-carousel > div > ul > li:nth-child(2) > span > div.a-section.a-spacing-small > a > div > img','Trending deals')
    })
})
})