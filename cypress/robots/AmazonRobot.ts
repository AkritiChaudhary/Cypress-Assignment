import { BaseHands, BaseEyes, BaseDependencies } from "./BaseRobot";

export class Dependencies extends BaseDependencies{
    visitAmazon(text:string){
        this.accessUrl(text);
    }
}

export class RobotHands extends BaseHands{
    amazonSignIn(){
        cy.get('#nav-signin-tooltip > .nav-action-button > .nav-action-inner').click({force : true})
        cy.get('#ap_email').type('7680962824')
        cy.get('.a-button-inner > #continue').click()
        cy.get('#ap_password').type('123@qwerty')
        cy.get('#signInSubmit').click()
    }
    checkForAllClickElements(text:string){
        this.clickOnDomElement(text);
    }
    
    typeIntoTextbox(id:string,text:string) {
        this.typeTextonId(id,text);
    }
    clickLocatorWithDom(locatorName: string, locatorValue: string,) {
        cy.get(`[${locatorName}="${locatorValue}"]`).click({multiple:true})
        return this;
      }
}

export class RobotEyes extends BaseEyes{
    forResponse(domObject:string,text:string){
        this.seesDomContainText(domObject,text);
    }
    

}