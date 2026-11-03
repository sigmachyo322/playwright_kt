
const { test, expect } = require('@playwright/test');

// TEST 1: Check that Wikipedia displays the expected text
test('Check Wikipedia homepage', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');

  await expect(
    page.getByRole('heading', { name: 'Wikipedia' })
  ).toBeVisible();
});

// TEST 2: Interact with the search form
test('Search for Playwright', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');

  const search = page.getByRole('searchbox', {
    name: 'Search Wikipedia',
  });

  await search.fill('Playwright');

  await page.getByRole('button', {
    name: 'Search',
  }).click();

  await expect(page).toHaveURL(/wiki\/Playwright/);
});

// TEST 3: Navigate to another page
test('Open Playwright article', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Playwright');

  await expect(
    page.getByRole('heading', {
      name: 'Playwright',
      exact: true,
    }).first()
  ).toBeVisible();
});
