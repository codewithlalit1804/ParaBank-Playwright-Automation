import { expect } from "@playwright/test";
import { LoanPage } from "../../pages/LoanPage/loanPage";
import LoanData from "../../testdata/LoanData/loanData.json";

export class LoanAction {
  readonly loanPage: LoanPage;

  constructor(page: any) {
    this.loanPage = new LoanPage(page);
  }

  async clickRequestLoan() {
    await this.loanPage.requestLoanLink.click();
  }

  async requestLoan() {
    await this.loanPage.loanAmount.fill(LoanData.loanDetails.amount);
    await this.loanPage.downPayment.fill(LoanData.loanDetails.downPayment);
    await this.loanPage.fromAccount.selectOption({index: 0});
    await this.loanPage.applyButton.click();
  }

  async verifyLoanResponse() {
    await this.loanPage.loanResult.waitFor({state:"attached"});
    await expect(this.loanPage.loanResult).toContainText("Congratulations, your loan has been approved.");
  }

  async invalidLoanRequest() {
    await this.loanPage.loanAmount.fill(LoanData.negativeLoan.amount);
    await this.loanPage.applyButton.click();
  }

  async verifyLoanError() {
    await expect(this.loanPage.errorMessage).toBeVisible();
  }
}
