import DynamicControlsPage from "../pageobjects/dynamic_controls.page.js";
import assert from 'node:assert';

describe('Dynamic controls page test', () => {
    it('should check checkbox', async () => {
        await DynamicControlsPage.open();

        await expect(DynamicControlsPage.pageTitle).toBeDisplayed();

        await DynamicControlsPage.checkbox.click();
        await DynamicControlsPage.btnRemoveCheckbox.click();
        
        await expect(DynamicControlsPage.message).toHaveTextContaining('It\'s gone!');
        assert.equal(await DynamicControlsPage.checkboxDisplayed(), false);
    })
})

