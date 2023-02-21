import AddRemoveElementsPage from '../pageobjects/add_remove_elements.page.js';
import assert from 'node:assert';

describe('Add/Remove Elements page test', () => {
    it('should open the url and verify the title', async () => {
        await AddRemoveElementsPage.open();

        await expect(AddRemoveElementsPage.pageTitle).toBeDisplayed();
        assert.equal(await AddRemoveElementsPage.pageTitle.getText(), 'Add/Remove Elements');
    })
    it('should add element and verify the list with added elements', async () => {
        await AddRemoveElementsPage.addButton.click(); // added first button
        await AddRemoveElementsPage.addButton.click(); // added second button
        await AddRemoveElementsPage.addButton.click(); // added third button

        assert.equal(await AddRemoveElementsPage.isElementsListDisplayed(), true);
    })
    it('should delete added elements and verify that the list is empty', async () => {
        await AddRemoveElementsPage.clickAllElements();

        assert.equal(await AddRemoveElementsPage.isElementsListDisplayed(), false);
        
    })
})

