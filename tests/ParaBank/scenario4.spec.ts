import { test } from "../../src/fixture/fixture";

test("Scenario 4: Bill Payment and Transaction Verification", async ({appAction}) => {

  await test.step("Step 1: Login with valid customer account", async () => {
    await appAction.login.login_details();
    await appAction.login.Click_On_LoginButton();
  });

  await test.step("Step 2: Navigate to Bill Pay", async () => {
    await appAction.billPay.clickBillPay();
  });

  await test.step("Step 3: Enter payee details and payment amount", async () => {
    await appAction.billPay.payBill();
  });

  await test.step("Step 4: Submit payment successfully", async () => {
    await appAction.billPay.submitPayment();
  });

  await test.step("Step 5: Verify payment confirmation message", async () => {
    await appAction.billPay.verifyPaymentSuccess();
  });

  await test.step("Step 6: Navigate to Find Transactions and Validate transaction record", async () => {
    await appAction.transaction.clickFindTransactionsLink();
    await appAction.transaction.selectAccount();
    await appAction.transaction.searchTransactionByAmount("100");
    await appAction.transaction.verifyTransactionRecord();
  });

});
