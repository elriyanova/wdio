import MultipleWindowsPage from "../pageobjects/multiple_windows.page.js";
import assert from 'node:assert';

describe('Switch window test', () => {
    it('should switch to the next tab and verify the url', async () => {
        MultipleWindowsPage.open();
        MultipleWindowsPage.clickHereBtn();
        MultipleWindowsPage.switchToWindow();

        await expect(browser).toHaveUrlContaining('/windows/new');
    })

    it('should verify the title', async () => {
        await expect(MultipleWindowsPage.pageTitle).toBeDisplayed();

        assert.equal(await MultipleWindowsPage.pageTitle.getText(), 'New Window');
    })
})

