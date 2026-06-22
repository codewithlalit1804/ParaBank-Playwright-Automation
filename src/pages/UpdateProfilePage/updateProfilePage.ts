import { Page,Locator } from "@playwright/test";

export class UpdateProfilePage {
  readonly page: Page;
  readonly updateContactLink: Locator;
  readonly phone: Locator;
  readonly address: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly zipCode: Locator;
  readonly updateButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.updateContactLink = page.locator("//a[contains(text(),'Update Contact Info')]");
    this.phone = page.locator("input[name='customer.phoneNumber']");
    this.address = page.locator("input[name='customer.address.street']");
    this.city = page.locator("input[name='customer.address.city']");
    this.state = page.locator("input[name='customer.address.state']");
    this.zipCode = page.locator("input[name='customer.address.zipCode']");
    this.updateButton = page.locator("input[value='Update Profile']");
    this.successMessage = page.locator("#updateProfileResult");
  }
}
