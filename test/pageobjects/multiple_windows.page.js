import Page from "./page.js";
import { waitAndClick } from '../../utils/element-commands.js';

class MultipleWindowsPage extends Page{
    get hereBtn(){
        return $('.example a[href="/windows/new"]')
    }

    get pageTitle(){
        return $('.example h3')
    }

    open(){
        return super.open('windows');
    }

    async clickHereBtn(){
        await waitAndClick(this.hereBtn);
    }

    async switchToWindow(){
        const newWindowHandle = await browser.waitUntil(async () => {
            const handles = await browser.getWindowHandles();
            return handles.length === 2 ? handles[1] : null;
        }, { timeout: 5000 });
        await browser.switchToWindow(newWindowHandle);
    }
}

export default new MultipleWindowsPage();