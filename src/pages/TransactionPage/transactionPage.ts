import { Page,Locator } from "@playwright/test";

export class TransactionPage {
  readonly page: Page;
  readonly findTransactionsLink: Locator;
  readonly selectaccountDropdown: Locator;
  readonly findTransaction_ByIDButton: Locator;
  readonly findTransaction_ByDateButton: Locator;
  readonly findTransaction_ByDateRangeButton: Locator;
  readonly findTransaction_ByAmountButton: Locator;
  readonly Entertransaction_Date: Locator;
  readonly Entertransaction_fromDate: Locator;
  readonly Entertransaction_toDate: Locator;
  readonly Entertransactionamount: Locator;
  readonly Entertransaction_Id: Locator;
  readonly transactionTable: Locator;
  readonly transactionRows : Locator;
    

  constructor(page: Page) {
    this.page = page;
    this.findTransactionsLink = page.locator("//a[contains(text(),'Find Transactions')]",);
    this.selectaccountDropdown = page.locator("#accountId");
    this.Entertransaction_Id = page.locator("//input[@id='transactionId']/following::button[contains(text(),'FIND TRANSACTIONS')][1]");
    this.findTransaction_ByIDButton = page.locator("//button[@id='findById']",);
    this.Entertransaction_Date = page.locator("#transactionDate");
    this.findTransaction_ByDateButton = page.locator("//button[@id='findByDate']");
    this.Entertransaction_fromDate = page.locator("#fromDate");
    this.Entertransaction_toDate = page.locator("#toDate");
    this.findTransaction_ByDateRangeButton = page.locator("//button[@id='findByDateRange']");
    this.Entertransactionamount = page.locator("#amount");
    this.findTransaction_ByAmountButton = page.locator("//button[@id='findByAmount']");
    this.transactionTable = page.locator("//h1[contains(text(),'Transaction Results')]/following::table[1]");
    //this.transactionRows = page.locator("//h1[contains(text(),'Transaction Results')]/following::table[1]//tr");
    this.transactionRows = page.locator("#transactionTable tbody tr");
    
  }
}

