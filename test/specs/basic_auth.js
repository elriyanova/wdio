import BasicAuthPage from '../pageobjects/basic_auth.page.js';
import assert from 'node:assert';

describe('Basic Auth page test', () => {
    it('should login successfully', async () => {
        await BasicAuthPage.open();
        assert.equal(await BasicAuthPage.successMessage.getText(), "Congratulations! You must have the proper credentials.");
    })
    it('should not login successfully', async () => {
        await BasicAuthPage.openWithInvalidCredentials();
        assert.equal(await BasicAuthPage.isSuccessMessageDisplayed(), false);
    })
})
