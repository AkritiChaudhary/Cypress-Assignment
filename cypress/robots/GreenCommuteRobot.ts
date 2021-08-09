import { BaseEyes,BaseHands,BaseDependencies } from "./BaseRobot";

export class Dependencies extends BaseDependencies{
    visitGreenCommute(url: string){
        this.accessUrl(url);
    }
}

export class RobotEyes extends BaseEyes{
    
    checkLocationSelection(text:string){
        this.seesTextWithClass('MuiInputBase-root',text);
    }

    checkLocationText(){
        this.seesDomContainText(`root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div>input`,'Hyderabad, Telangana, India')
    }
    
    checkSkills(){
        this.seesTextWithId(`root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div > div:nth-child(2) >span > h4`,'SOFTWARE ENGINEER')
        this.seesTextWithId(`root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div > div:nth-child(3) > span > h4`,'JAVASCRIPT_DEVELOPER')
    }
    
    checkBox(element : string,value1:string){
        this.seesDomContainText(element,value1)
        }

    nextButtonVisible(text:string,index:number,text2:string){
        this.seesTextWithClassAndIndex(text,index,text2)
    }

    savedJobsVisible(id:string){
        this.seesIdVisible(id)
    }
    
    visibleFindJobsAfterFilter(domClass: string, index: number, text: string){
        this.seesTextWithClassAndIndex(domClass, index, text)
    }
}

export class RobotHands extends BaseHands{

   clickTextbox(id : string){
        this.clickOnDomElement(id)
   }
   typeIntoLocation(className:string,text:string) {
    cy.get(className).type(text);
   }
   clickNextButton(element : string){
       this.clickOnDomElement(element)
   }
   
   enterJobLocation(id : string , jobLocation : string){
       this.typeTextonId(id,jobLocation)
   }
   clickonDomusingLocator(locatorName: string, locatorValue: string,) {
    cy.get(`[${locatorName}="${locatorValue}"]`).click({multiple:true})
    return this;
  }

   writeSkills(skill : string){
       cy.get('.MuiInputBase-root').type(skill)
       cy.get('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div').type('{downarrow}{enter}')
   }
   clickOnFilter(filter : string){
       this.clickOnDomElement(filter)
       this.clickOnDomElement("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiGrid-root.jss113.MuiGrid-container.MuiGrid-spacing-xs-4 > div:nth-child(5) > div > div:nth-child(2) > div > label > span.MuiButtonBase-root.MuiIconButton-root.jss120.MuiCheckbox-root.jss118.jss121.Mui-checked.jss119 > span.MuiIconButton-label > input")  
   }
   checkBox(element : string){
    this.clickOnDomElement(element)
    }
   clickApply(text: string){
    this.clickOnDomElement(text) 
   }
   clickOnClasswithButtonTagandIndex(domClass: string, index: number){
    cy.get(domClass)
      .eq(index)
      .click();
    return this;
  }
   clickOnClearAll(){
    this.clickOnDomElement('.jss87 > .MuiGrid-container > .MuiGrid-grid-xs-2')
   }
   clickaJob(text: string){
    this.clickOnDomElement(text)
   }
   clickSaveButton(text : string){
    this.clickOnDomElement(text)
   }
   clickSavedJobs(text: string){
    this.clickOnDomElement(text)
   }
   clickRemove(text : string){
    this.clickOnDomElement(text)
   }


    
}
