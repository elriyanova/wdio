import Page from './page.js';

class AddRemoveElementsPage extends Page {
    get pageTitle(){
        return $('h3=Add/Remove Elements')
    }

    get addButton () {
        return $('//button[text()="Add Element"]'); //xpath
    }

    get deleteButtons () {
        return $$('//button[text()="Delete"]'); //xpath
    }

    open () {
        return super.open('add_remove_elements/');
    }

    async isElementsListDisplayed() {
        const elements = await this.deleteButtons
        for (const element of elements) {
          if (!element) {
            return false
          }
          const isDisplayed = await element.isDisplayed()
          if (!isDisplayed) {
            return false
          }
        }
        return true
      }

      async clickAllElements() {
        const elements = await this.deleteButtons
        await elements.forEach(async (element) => {
          await element.click()
      })
      }
}

export default new AddRemoveElementsPage();