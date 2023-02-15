import Page from './page.js';

class DynamicControlsPage extends Page {
    get pageTitle(){
        return $('h4=Dynamic Controls')
    }

    get checkbox(){
        return $('input[type="checkbox"]')
    }

    get btnRemoveCheckbox(){
        return $('//button[@type="button" and text()="Remove"]') //xpath
    }

    get btnAddCheckbox(){
        return $('//button[@type="button" and text()="Add"]') //xpath
    }

    get message(){
        return $('#message')
    }

    async checkboxDisplayed(){
        return await this.checkbox.isDisplayed();
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open(){
        return super.open('dynamic_controls');
    }
}

export default new DynamicControlsPage();