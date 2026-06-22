import { Page, Locator } from "@playwright/test";

export class AccountOverviewPage {

  readonly page: Page;
  readonly accountsOverviewLink: Locator;
  readonly accountNumber: Locator;


  constructor(page: Page) {

    this.page = page;
    this.accountsOverviewLink = page.locator("//a[contains(text(),'Accounts Overview')]");
    this.accountNumber = page.locator("//table[@id='accountTable']//a");

  }

}