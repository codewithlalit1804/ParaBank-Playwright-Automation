import { expect } from "@playwright/test";
import { AccountOverviewPage } from "../../pages/AccountsOverviewPage/accountsOverviewPage";

export class AccountsOverviewAction {
  readonly accountsOverviewPage: AccountOverviewPage;

  constructor(page: any) {
    this.accountsOverviewPage = new AccountOverviewPage(page);
  }

  async clickAccountsOverview() {
    await this.accountsOverviewPage.accountsOverviewLink.click();
  }

  async verifyNewAccountNumber(accountNumber: string) {
    await expect(this.accountsOverviewPage.accountNumber.filter({hasText: accountNumber})).toBeVisible();
  }
  
}
