export class InventoryPage {
    constructor(page) {
        this.page = page;
        this.addToCart = '#add-to-cart-sauce-labs-backpack';
        this.cartBtn = '.shopping_cart_link';
    }

    async addProductToCart() {
        await this.page.click(this.addToCart);
        await this.page.click(this.cartBtn);
    }
}
