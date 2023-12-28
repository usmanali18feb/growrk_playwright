import { test, expect } from '@playwright/test';

test('homepage has title and link to our login', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('https://growrk.com');

  // Get the title of the homepage
  const homepageTitle = await page.title();

  // Assert that the title is as expected
  expect(homepageTitle).toBe('GroWrk - Smart Equipment Management Software');

  // Click on the link to the login page
  await page.click('a[href="https://app.growrk.com/sso/login/"]');

  // Wait for the load state to be "load"
  await page.waitForLoadState('load');

  // Verify that the login page is loaded by checking its title
  const loginPageTitle = await page.title();
  expect(loginPageTitle).toBe('GroWrk | Login');

  // Perform the login with invalid credentials
  await page.fill('input[id="email"]', 'usman.ali18feb@gmail.com');
  await page.fill('input[id="password"]', '@Mani112233');
  await page.click('button[id="gtag-login"]');

  // Wait for the load state to be "load"
  await page.waitForLoadState('load');

  // User is now on login page after negative test cases - Passed
  const postLoginPageTitle = await page.title();
  expect(postLoginPageTitle).toBe('GroWrk | Login');

  // Validate the metaURL
  const metaURL = page.locator('meta[property="og:url"]')
  await expect(metaURL).toHaveAttribute('content', 'https://app.growrk.com')

});
