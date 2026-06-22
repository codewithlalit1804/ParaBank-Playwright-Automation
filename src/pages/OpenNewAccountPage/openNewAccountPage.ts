import { Page, Locator } from "@playwright/test";

export class OpenAccountPage {
  readonly page: Page;
  readonly openAccountLink: Locator;
  readonly accountType: Locator;
  readonly fromAccount: Locator;
  readonly openButton: Locator;
  readonly successMessage: Locator;
  readonly newAccountNumber: Locator;


  constructor(page: Page) {
    this.page = page;
    this.openAccountLink = page.locator("//a[contains(text(),'Open New Account')]");
    this.accountType = page.locator("#type");
    this.fromAccount = this.page.locator("//select[@id='fromAccountId']");
    this.openButton = this.page.locator("[value='Open New Account']");
    this.successMessage = this.page.locator("//h1[contains(text(),'Account Opened!')]");
    this.newAccountNumber = this.page.locator("//div[@id='openAccountResult']//a[@id='newAccountId']");
  }
}
