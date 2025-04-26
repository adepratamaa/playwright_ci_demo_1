import { Page, Locator, expect } from 'playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly inventoryContainer: Locator;
  readonly productItems: Locator;
  readonly addToCartButtons: Locator;
  readonly shoppingCartBadge: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryContainer = page.locator('.inventory_list');
    this.productItems = page.locator('.inventory_item');
    this.addToCartButtons = page.locator('.btn_inventory');
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
    this.cartButton = page.locator('.shopping_cart_link');
  }

  async validateProductListIsVisible() {
    await this.inventoryContainer.waitFor();
    await this.productItems.nth(0).waitFor();
  }

  async addItemToCart(itemIndex: number) {
    await this.addToCartButtons.nth(itemIndex).click();
  }

  async validateCartItemCount(expectedCount: number) {
    await this.shoppingCartBadge.waitFor();
    await expect(this.shoppingCartBadge).toHaveText(expectedCount.toString());
  }

  async goToCart() {
    await this.cartButton.click();
  }
}
