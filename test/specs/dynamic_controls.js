import DynamicControlsPage from "../pageobjects/dynamic_controls.page.js";
import assert from 'node:assert';

describe('Dynamic controls page test', () => {
    it('should open the url and verify the title', async () => {
        await DynamicControlsPage.open();

        await expect(DynamicControlsPage.pageTitle).toBeDisplayed();
        assert.equal(await DynamicControlsPage.pageTitle.getText(), 'Dynamic Controls');
    })

    it('should click on checkbox and verfiy that checkbox is activated', async () => {
        await DynamicControlsPage.checkbox.click();

        assert.equal(await DynamicControlsPage.checkbox.isSelected(), true);
    })
    
    it('should click on Remove button and verify that checkbox removed', async () => {
        await DynamicControlsPage.btnRemoveCheckbox.click();
        
        await expect(DynamicControlsPage.message).toHaveTextContaining('It\'s gone!');
        assert.equal(await DynamicControlsPage.checkboxDisplayed(), false);
    })
})

