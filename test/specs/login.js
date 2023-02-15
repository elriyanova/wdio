import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Login page test', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
        await expect(browser).toHaveUrlContaining('/secure')
        await expect(browser).toHaveTitle('The Internet')
    })

    it('should logout', async () => {
        await SecurePage.logout();
        await expect(LoginPage.flashAlert).toHaveTextContaining(
            'You logged out of the secure area!');
    })
})


