GroWrk Login Test


This repository contains login tests using Playwright for the GroWrk website. The test script navigates through the homepage, verifies the title, clicks on the login link, performs a login with invalid credentials, and checks if the user is redirected to the login page.

Test Scenario:
The test script covers the following scenarios:
1. Navigate to the Homepage:
2. Open the browser and navigate to https://growrk.com.

Verify Homepage Title:
1. Ensure that the title of the homepage is "GroWrk - Smart Equipment Management Software."

Click on the Login Link:
1. Click on the link that leads to the login page: https://app.growrk.com/sso/login/.

Verify Login Page Title:
1. Check that the title of the login page is "GroWrk | Login."

Perform Login with Invalid Credentials:
1. Fill in the email and password fields with invalid credentials.
2. Click on the login button.

Verify Post-Login Page Title:
1. After login attempts with invalid credentials, confirm that the title remains "GroWrk | Login."

Validate Meta URL:
1. Check the meta tag with the property "og:url" and ensure that its content attribute is set to https://app.growrk.com.

How to Run the Test:
To run the test locally, follow these steps:
1. Clone the repository:  git clone https://github.com/usmanali18feb/growrk_playwright
2. Install dependencies:  npm install
3. Run the test: npm test
