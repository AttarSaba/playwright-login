import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly dashboardHeading: Locator;
    readonly errorMessage: Locator;
    
    
    
    constructor(page: Page){
        this.page = page;
        this.userNameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login'});
        this.dashboardHeading = page.getByRole('heading', { name : 'Dashboard'});
        this.errorMessage = page.locator('.orangehrm-login-error').filter({hasText : 'Invalid credentials'});
    }

    async goTo() {
        this.page.goto(process.env.BASE_URL!);
    }

    async fillLoginForm(userName : string, password : string) {
        await this.userNameInput.fill(userName);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}