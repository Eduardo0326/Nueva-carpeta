export class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.checkoutBtn = '#checkout';
        this.firstName = '#first-name';
        this.lastName = '#last-name';
        this.zip = '#postal-code';
        this.continueBtn = '#continue';
        this.finishBtn = '#finish';
        this.successMsg = '.complete-header';
    }

    async checkout() {
        await this.page.click(this.checkoutBtn);
        await this.page.fill(this.firstName, "Eduardo");
        await this.page.fill(this.lastName, "Ibanez");
        await this.page.fill(this.zip, "110111");
        await this.page.click(this.continueBtn);
        await this.page.click(this.finishBtn);
    }
}
