import { expect } from "@playwright/test";
import { TransactionPage } from "../../pages/TransactionPage/transactionPage";

export class TransactionAction {
  readonly transactionPage: TransactionPage;

  constructor(page: any) {
    this.transactionPage = new TransactionPage(page);
  }

  async clickFindTransactionsLink() {
    await this.transactionPage.findTransactionsLink.click();
  }

  async selectAccount() {
    await this.transactionPage.selectaccountDropdown.selectOption({ index: 0 });
  }

  async searchTransactionById(transactionId: string) {
    await this.transactionPage.Entertransaction_Id.fill(transactionId);
    await this.transactionPage.findTransaction_ByIDButton.click();
  }

  async searchTransactionByDate(date: string) {
    await this.transactionPage.Entertransaction_Date.fill(date);
    await this.transactionPage.findTransaction_ByDateButton.click();
  }

  async searchTransactionByAmount(amount: string) {
    await this.transactionPage.Entertransactionamount.fill(amount);
    await this.transactionPage.findTransaction_ByAmountButton.click();
  }
  async verifyTransactionRecord() {
    await expect(this.transactionPage.transactionTable).toBeVisible();
    const rows = this.transactionPage.transactionRows;
    const rowCount = await rows.count();
    console.log("Total Transactions:", rowCount);
    expect(rowCount).toBeGreaterThan(0);
    for (let i = 0; i < rowCount; i++) {
      const rowText = await rows.nth(i).innerText();
      console.log(`Transaction ${i + 1}:`, rowText);
      expect(rowText).toMatch(/\$\d+\.\d+/);
    }
  }
}
