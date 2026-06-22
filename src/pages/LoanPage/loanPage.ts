import { Page, Locator } from "@playwright/test";

export class LoanPage {
  readonly page: Page;
  readonly requestLoanLink: Locator;
  readonly loanAmount: Locator;
  readonly downPayment: Locator;
  readonly fromAccount: Locator;
  readonly applyButton: Locator;
  readonly loanResult: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.requestLoanLink = page.locator("//a[contains(text(),'Request Loan')]");
    this.loanAmount = page.locator("#amount");
    this.downPayment = page.locator("#downPayment");
    this.fromAccount = page.locator("#fromAccountId");
    this.applyButton = page.locator("//input[@value='Apply Now']");
    this.loanResult = page.locator("//p[contains(text(),'Congratulations, your loan has been approved.')]");
    this.errorMessage = page.locator("#loanRequestDenied");
  }
}
