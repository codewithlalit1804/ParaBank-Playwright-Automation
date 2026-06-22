import { expect } from "@playwright/test";
import { TransferFundsPage } from "../../pages/TransferFundsPage/transferFundsPage";
import TransferData from "../../testdata/TransferFundsData/transferFundsData.json";

export class TransferFundsAction {
  readonly transferFundsPage: TransferFundsPage;

  constructor(page: any) {
    this.transferFundsPage = new TransferFundsPage(page);
  }

  async clickTransferFunds() {
    await this.transferFundsPage.transferFundsLink.click();
  }

  async transferAmount(toAccountNumber: string) {
    await this.transferFundsPage.amount.fill(TransferData.transferDetails.amount,);
    await this.transferFundsPage.fromAccount.selectOption({label: toAccountNumber});
    await this.transferFundsPage.toAccount.selectOption({label: toAccountNumber});
    await this.transferFundsPage.transferButton.click();
  }

  async verifyTransferSuccess() {
    await expect(this.transferFundsPage.successMessage).toContainText("Transfer Complete!");
  }

  async verifyTransferError() {
    await expect(this.transferFundsPage.errorMessage).toBeVisible();
    await expect(this.transferFundsPage.errorMessage).toContainText("Error");
  }

  async invalidTransfer() {
    await this.transferFundsPage.amount.fill(TransferData.negativeTransfer.invalidAmount);
    await this.transferFundsPage.transferButton.click();
  }

  async verifyAccountBalance() {
    const balance = await this.transferFundsPage.accountBalance.textContent();
    console.log("Updated Balance:", balance);
    return balance?.trim();
  }
}
