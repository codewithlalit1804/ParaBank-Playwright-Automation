import { Page, Locator } from "@playwright/test";

export class TransferFundsPage {
  readonly page: Page;
  readonly transferFundsLink: Locator;
  readonly amount: Locator;
  readonly fromAccount: Locator;
  readonly toAccount: Locator;
  readonly transferButton: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;
  readonly accountTable: Locator;
  readonly accountBalance: Locator;

  constructor(page: Page) {
    this.page = page;
    this.transferFundsLink = page.locator("//a[contains(text(),'Transfer Funds')]");
    this.amount = page.locator("#amount");
    this.fromAccount = page.locator("#fromAccountId");
    this.toAccount = page.locator("#toAccountId");
    this.transferButton = page.locator("input[value='Transfer']");
    this.successMessage = page.locator("#showResult");
    this.errorMessage = page.locator("#showError");
    this.accountTable = page.locator("#accountTable tbody tr");
    this.accountBalance = this.page.locator("#accountTable tbody tr").first().locator("td").nth(1);
  }
}
