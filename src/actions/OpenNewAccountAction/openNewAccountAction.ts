import { expect } from "@playwright/test";
import { OpenAccountPage } from "../../pages/OpenNewAccountPage/openNewAccountPage";
import { AccountOverviewPage } from "../../pages/AccountsOverviewPage/accountsOverviewPage";

export class OpenAccountAction {
  readonly openAccountPage: OpenAccountPage;
  readonly accountsOverviewPage: AccountOverviewPage;

  constructor(page: any) {
    this.openAccountPage = new OpenAccountPage(page);
    this.accountsOverviewPage = new AccountOverviewPage(page);
  }

  async clickOpenNewAccountLink() {
    await this.openAccountPage.openAccountLink.click();
  }

  async selectAccountType() {
    await this.openAccountPage.accountType.selectOption({ label: "SAVINGS" });
  }

  async OpenNewAccountButton(): Promise<string> {
    await this.openAccountPage.openButton.click();
    const accountNumber  = await this.openAccountPage.newAccountNumber.textContent();
    return accountNumber!.trim();
  }

  async verifyAccountCreationSuccess() {
    await expect(this.openAccountPage.successMessage).toHaveText("Account Opened!");
  }
}

  


