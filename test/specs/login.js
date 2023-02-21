import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import BasicUser from '../../constants/user/basicUser.js'

describe('Login page test', () => {
    it('should login with valid credentials and verify message', async () => {
        const user = new BasicUser();

        await LoginPage.open();
        await LoginPage.login(user.username, user.password);

        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
    })

    it('should verify url', async () => {
        await expect(browser).toHaveUrlContaining('/secure');
    })

    it('should verify title', async () => {
        await expect(browser).toHaveTitle('The Internet');
    })

    it('should logout and verify message', async () => {
        await SecurePage.logout();

        await expect(LoginPage.flashAlert).toHaveTextContaining(
            'You logged out of the secure area!');
    })
})


