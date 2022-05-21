import { test, expect } from '@playwright/test';

test('should navigate to the work page', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Work');
  await expect(page).toHaveURL('/work');
  await expect(page.locator('h1')).toContainText('Work');
});

test('should navigate to the posts page', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Posts');
  await expect(page).toHaveURL('/posts');
  await expect(page.locator('h1')).toContainText('Posts');
});

test('should navigate to the videos page', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Videos');
  await expect(page).toHaveURL('/videos');
  await expect(page.locator('h1')).toContainText('Videos');
});

test('should navigate to the feed page', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Feed');
  await expect(page).toHaveURL('/feed');
  await expect(page.locator('h1')).toContainText('Feed');
});
