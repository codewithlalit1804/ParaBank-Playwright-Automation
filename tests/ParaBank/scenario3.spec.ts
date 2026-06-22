import { test } from "../../src/fixture/fixture";

test("Scenario 3: Fund Transfer Between Accounts", async ({ appAction }) => {
    
  let AccountNumber: string ;

  await test.step("Step 1: Login with valid customer account", async () => {
    await appAction.login.login_details();
    await appAction.login.Click_On_LoginButton();
  });

  await test.step("Step 2: Create additional account if required", async () => {
    await appAction.openNewAccount.clickOpenNewAccountLink();
    await appAction.openNewAccount.selectAccountType();
    AccountNumber = await appAction.openNewAccount.OpenNewAccountButton();
    console.log("Created New Account Number:", AccountNumber);
  });

  await test.step("Step 3: Navigate to Transfer Funds", async () => {
    await appAction.transferFunds.clickTransferFunds();
  });

  await test.step("Step 4: Transfer valid amount between two accounts", async () => {
    if (AccountNumber) {
      await appAction.transferFunds.transferAmount(AccountNumber);
    }
  });

  await test.step("Step 5: Verify transfer completion message", async () => {
    await appAction.transferFunds.verifyTransferSuccess();
  });

  await test.step("Step 6: Validate updated balances in Accounts Overview", async () => {
    await appAction.accountOverview.clickAccountsOverview();
    await appAction.transferFunds.verifyAccountBalance();
  });
});
