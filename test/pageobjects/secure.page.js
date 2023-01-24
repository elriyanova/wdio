

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }

    get btnLogout () {
        return $('[href="/logout"]');
    }

    async logout(){
        await this.btnLogout.click();
    }
}

export default new SecurePage();
