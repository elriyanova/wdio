import AddRemoveElementsPage from '../pageobjects/add_remove_elements.page.js';
import assert from 'node:assert';

describe('Add/Remove Elements page test', () => {
    it('should add element', async () => {
        await AddRemoveElementsPage.open();

        await expect(AddRemoveElementsPage.pageTitle).toBeDisplayed();

        await AddRemoveElementsPage.addButton.click(); // added first button

        await AddRemoveElementsPage.addButton.click(); // added second button

        await AddRemoveElementsPage.addButton.click(); // added third button

        assert.equal(await AddRemoveElementsPage.isElementsListDisplayed(), true);
    })
    it('should delete added elements', async () => {
        await AddRemoveElementsPage.clickAllElements();

        assert.equal(await AddRemoveElementsPage.isElementsListDisplayed(), false);
        
    })
})

