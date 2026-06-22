import { Page, Locator } from "@playwright/test";

export class BillPayPage {
  readonly page: Page;
  readonly billPayLink: Locator;
  readonly payeeName: Locator;
  readonly address: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly zipCode: Locator;
  readonly phone: Locator;
  readonly account: Locator;
  readonly verifyAccount: Locator;
  readonly amount: Locator;
  readonly sendPayment: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.billPayLink = page.locator("//a[contains(text(),'Bill Pay')]");
    this.payeeName = page.locator("input[name='payee.name']");
    this.address = page.locator("input[name='payee.address.street']");
    this.city = page.locator("input[name='payee.address.city']");
    this.state = page.locator("input[name='payee.address.state']");
    this.zipCode = page.locator("input[name='payee.address.zipCode']");
    this.phone = page.locator("input[name='payee.phoneNumber']");
    this.account = page.locator("input[name='payee.accountNumber']");
    this.verifyAccount = page.locator("input[name='verifyAccount']");
    this.amount = page.locator("input[name='amount']");
    this.sendPayment = page.locator("//input[@value='Send Payment']");
    this.successMessage = page.locator("#billpayResult");
   
  }
}
