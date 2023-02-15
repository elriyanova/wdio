import AddRemoveElementsPage from '../pageobjects/add_remove_elements.page.js';
import assert from 'node:assert';

describe('Add/Remove Elements page test', () => {
    it('should add element', async () => {
        await AddRemoveElementsPage.open();

        await expect(AddRemoveElementsPage.pageTitle).toBeDisplayed();

        await AddRemoveElementsPage.addButton.click();

        assert.equal(await AddRemoveElementsPage.addedElementIsDisplayed(), true);

        await AddRemoveElementsPage.deleteButton.click();

        assert.equal(await AddRemoveElementsPage.addedElementIsDisplayed(), false);
        
    })
})

