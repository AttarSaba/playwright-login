import { expect, test } from "@playwright/test";
import { PlaywrightDevPage } from "../page-object/playwright-dev-page";

test('getting started should contain table of contents', async ( {page} ) => {
    const playwrightDevPage = new PlaywrightDevPage(page);
    await playwrightDevPage.goto();
    await playwrightDevPage.getStarted();
    await expect(playwrightDevPage.tocList).toHaveText([
    `How to install Playwright`,
    `What's Installed`,
    `How to run the example test`,
    `How to open the HTML test report`,
    `Write tests using web first assertions, page fixtures and locators`,
    `Run single test, multiple tests, headed mode`,
    `Generate tests with Codegen`,
    `See a trace of your tests`
    ]);
});

test('should show Page Object Model article', async ({page}) => {
    const playwrightDevPage = new PlaywrightDevPage(page);
    await playwrightDevPage.goto();
    await playwrightDevPage.pageObjectModel();
    await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
});