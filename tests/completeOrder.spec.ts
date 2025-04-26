import { test } from 'playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';

test('Complete order on SauceDemo', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.visit();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.validateProductListIsVisible();
  await inventoryPage.addItemToCart(0);
  await inventoryPage.validateCartItemCount(1);
  await inventoryPage.goToCart();

  await cartPage.validateCartItems(1);
  await cartPage.proceedToCheckout();

  await checkoutPage.fillCheckoutForm('John', 'Doe', '12345');
  await checkoutPage.completeOrder();
  // await checkoutPage.validateOrderSuccess();
});
