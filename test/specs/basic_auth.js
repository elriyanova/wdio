import BasicAuthPage from '../pageobjects/basic_auth.page.js';
import assert from 'node:assert';

describe('Basic Auth page test', () => {
    before(() => {
        BasicAuthPage.open();
    })

    it('should login successfully', async () => {
        assert.equal(await BasicAuthPage.successMessage.getText(), "Congratulations! You must have the proper credentials.");
    })
    it('should not login successfully', async () => {
        await BasicAuthPage.openWithInvalidCredentials();
        assert.equal(await BasicAuthPage.isSuccessMessageDisplayed(), false);
    })
})
