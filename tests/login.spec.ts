import {test, expect} from '@playwright/test'


test('OrangeHRM has title', async( { page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    //Expect a title to have an Orange as a substring
    await expect(page).toHaveTitle("OrangeHRM");
});

test('Playwright has title', async( { page }) => {
    await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('login orangehrm',async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    //Expect a title to have an Orange as a substring
    await expect(page).toHaveTitle("OrangeHRM");
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login'}).click();
    await expect(page.getByRole('heading', { name : 'Dashboard'})).toBeVisible();
})

