const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page; // Playwright page object
        // Define locators
        this.loginLink = '#login2'; // CSS selector for the login link
        this.usernameField = '#loginusername'; // ID selector for username field
        this.passwordField = '#loginpassword'; // ID selector for password field
        this.loginButton = "//button[normalize-space()='Log in']"; // XPath for the login button
    }

    // Navigate to the application homepage
    async navigate() {
        await this.page.goto('https://demoblaze.com/index.html');
    }

    // Perform login
    async login(username, password) {
        await this.page.click(this.loginLink); // Click the login link
        await this.page.fill(this.usernameField, username); // Enter username
        await this.page.fill(this.passwordField, password); // Enter password
        await this.page.click(this.loginButton); // Click the login button
    }
}

module.exports = LoginPage; // Export the class
