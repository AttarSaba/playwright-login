import 'dotenv/config';
import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/login-page';

let loginPage: LoginPage

test.beforeEach(async ({page}) => {
  loginPage = new LoginPage(page);
});


test('OrangeHRM has title', async( { page }) => {
    await loginPage.goTo();

    //Expect a title to have an Orange as a substring
    await expect(page).toHaveTitle("OrangeHRM");
});

test('Playwright has title', async( { page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});

test('login orangehrm',async ({page}) => {
    await loginPage.goTo();
    //Expect a title to have an Orange as a substring
    await expect(page).toHaveTitle("OrangeHRM");
    await loginPage.fillLoginForm(process.env.USERNAME!, process.env.PASSWORD!);
    await expect(loginPage.dashboardHeading).toBeVisible({timeout :3000});
    await expect(loginPage.dashboardHeading).toHaveText('Dashboard', { timeout : 5000 });
})

test('Invalid login shows error', async( {page}) => {
    await loginPage.goTo();
    await loginPage.fillLoginForm('student','admin123');
    await expect(loginPage.errorMessage).toContainText('Invalid credentials');
});