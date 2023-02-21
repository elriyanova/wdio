import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import BasicUser from '../../constants/user/basicUser.js'
import assert from 'node:assert';

describe('Login page test', () => {
    before(() => {
        LoginPage.open();
    })

    it('should login with valid credentials and verify message', async () => {
        const user = new BasicUser();
        await LoginPage.login(user.username, user.password);

        await expect(SecurePage.flashAlert).toBeExisting();
        assert.equal(await SecurePage.flashAlert.getText(), 'You logged into a secure area!\n×');
        
    })

    it('should verify url', async () => {
        await expect(browser).toHaveUrlContaining('/secure');
    })

    it('should verify title', async () => {
        await expect(browser).toHaveTitle('The Internet');
    })

    it('should logout and verify message', async () => {
        await SecurePage.logout();

        assert.equal(await LoginPage.flashAlert.getText(), 'You logged out of the secure area!\n×');
    })
})


