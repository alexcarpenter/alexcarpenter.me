import { test, expect } from '@playwright/test';

test('shows more recommendations on click', async ({ page }) => {
  await page.goto('/work');
  await page.click('text=Show more');
  await expect(page.locator('h1')).toContainText('Work');
  await expect(page).not.toContain('Show more');
});
