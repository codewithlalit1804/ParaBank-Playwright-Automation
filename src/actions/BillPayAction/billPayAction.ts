import { expect } from "@playwright/test";
import { BillPayPage } from "../../pages/BillPayPage/billPayPage";
import BillPayData from "../../testdata/BillPayData/billPayData.json";

export class BillPayAction {
  readonly billPayPage: BillPayPage;

  constructor(page: any) {
    this.billPayPage = new BillPayPage(page);
  }

  async clickBillPay() {
    await this.billPayPage.billPayLink.click();
  }

  async payBill() {
    const data = BillPayData.billPayment;

    await this.billPayPage.payeeName.fill(data.payeeName);
    await this.billPayPage.address.fill(data.address);
    await this.billPayPage.city.fill(data.city);
    await this.billPayPage.state.fill(data.state);
    await this.billPayPage.zipCode.fill(data.zipCode);
    await this.billPayPage.phone.fill(data.phone);
    await this.billPayPage.account.fill(data.account);
    await this.billPayPage.verifyAccount.fill(data.verifyAccount);
    await this.billPayPage.amount.fill(data.amount);
    await this.billPayPage.sendPayment.click();
  }

  async submitPayment() {
    await this.billPayPage.sendPayment.click({force:true});
  }

  async verifyPaymentSuccess() {
    await expect(this.billPayPage.successMessage).toContainText("Bill Payment Complete");
  }
  
}
