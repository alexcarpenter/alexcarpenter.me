import { test, expect } from '@playwright/test';

test('should switch themes', async ({ page }) => {
  const htmlElement = page.locator('html');
  await page.goto('/');
  await page.selectOption('#theme-menu', 'dark');
  const selectedValue = await page.$eval(
    '#theme-menu',
    (element) => element.value,
  );
  await expect(selectedValue).toContain('dark');
  await expect(htmlElement).toHaveClass('dark');
});
