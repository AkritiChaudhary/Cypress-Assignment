import {Dependencies, RobotHands, RobotEyes} from '../../robots/GreenCommuteRobot';
context('Testing', () => {
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();
    
    describe('Job search', ()=>{
        before('Navigate to Green Commute page', () => {
           
            dependencies.visitGreenCommute('http://bc15-green-commute.dev-apps.io/')
        })

        it('Enter the Location', () => {
            robotHands.clickTextbox('.MuiInputBase-root')
            robotHands.typeIntoLocation('.MuiInputBase-root',"Hy{downArrow}{enter}")
            //robotEyes.checkLocationSelection('Hyderabad,Telangana,India')
            robotHands.clickNextButton(':nth-child(1) > [data-testid=button] > .MuiButton-label')
        })

        it('Enter Job Location',()=>{
            robotHands.clickTextbox('.MuiInputBase-root')
            robotHands.typeIntoLocation('.MuiInputBase-root',"Ban{downArrow}{enter}")
            robotHands.clickNextButton(':nth-child(1) > [data-testid=button] > .MuiButton-label')
            
        })

        it('Enter the skills',()=>{
            robotHands.clickTextbox('.MuiInputBase-root')
            robotHands.writeSkills('Python{downArrow}{enter}')
            robotHands.clickNextButton(':nth-child(1) > [data-testid=button] > .MuiButton-label')   
        })

        it("no location and skills ",()=>{

            robotHands.clickonDomusingLocator("data-testid","filterButton")
            robotHands.checkBox('input[name="Yes"]')
            robotHands.checkBox('input[name="0-10 kms"]')
            robotHands.clickOnClasswithButtonTagandIndex("button",-1)
        })
        
        it('Click On Job Post',()=>{
            cy.get('[data-testid=jobCard-placeholder]')
        })
        
        it('Save the Job',() =>{
            robotHands.clickSaveButton('.MuiGrid-root > .MuiButton-outlined')
        })
        
        it('Go to Saved job',()=>{
           // robotHands.clickSavedJobs('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-2 > div > div > ul > div:nth-child(3) > div.MuiListItemText-root.jss53 > p')
           cy.get(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root')
        })

        it('click the job that is saved',()=>{
            cy.get('[data-testid=jobCard-placeholder]')
        })

        it('remove a saved job',()=>{
            robotHands.clickonDomusingLocator("data-testid","jobList-placeholder");
        })      
        
   })

})