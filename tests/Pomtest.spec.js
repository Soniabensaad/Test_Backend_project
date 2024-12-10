const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage'); // Correctly import the LoginPage class

test('Login Test', async ({ page }) => {
    // Create an instance of the LoginPage
    const login = new LoginPage(page);

    // Navigate to the homepage
    await login.navigate();

    // Perform login
    await login.login('pavanol', 'test@123');

    // Wait for a short duration to observe the result
    await page.waitForTimeout(3000);

    // Additional steps can be added for home and cart pages
});





    //Home


    //Cart

