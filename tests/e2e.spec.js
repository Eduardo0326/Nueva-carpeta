import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import { InventoryPage } from '../pages/inventoryPage.js';
import { CheckoutPage } from '../pages/checkoutPage.js';

test('Flujo completo: login + agregar producto + checkout', async ({ page }) => {
  
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  
  await inventory.addProductToCart();
  
  await checkout.checkout();

  const msg = await page.textContent('.complete-header');
  expect(msg.toLowerCase()).toContain('thank you');
});
