class BasicAuthPage {
    get successMessage(){
        return $('.example p')
    }

    open(){
        return browser.url('http://admin:admin@the-internet.herokuapp.com/basic_auth')
    }

    openWithInvalidCredentials(){
        return browser.url('http://notadmin:notpassword@the-internet.herokuapp.com/basic_auth')
    }

    async isSuccessMessageDisplayed() {
        return await this.successMessage.isDisplayed();
    }
}

export default new BasicAuthPage();