import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('has button href and text', async({ page }) => {
  await page.goto('https://playwright.dev/');

  const locator = page.locator('.getStarted_Sjon');
  await expect(locator).toHaveText(/Get started/);
  await expect(locator).toHaveAttribute('href', '/docs/intro');
});