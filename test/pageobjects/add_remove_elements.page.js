import Page from './page.js';

class AddRemoveElementsPage extends Page {
    get pageTitle(){
        return $('h3=Add/Remove Elements')
    }

    get addButton () {
        return $('//button[text()="Add Element"]'); //xpath
    }

    get deleteButton () {
        return $('//button[text()="Delete"]'); //xpath
    }

    async addedElementIsDisplayed(){
        return await this.deleteButton.isDisplayed();
    }

    open () {
        return super.open('add_remove_elements/');
    }
}

export default new AddRemoveElementsPage();