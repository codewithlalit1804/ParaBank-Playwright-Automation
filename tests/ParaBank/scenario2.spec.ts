import { test } from "../../src/fixture/fixture";

test("Scenario 2: Open New Account and Verify Account Creation", async ({appAction}) => {

  let AccountNumber: string;

  await test.step("Step 1: Login with valid customer account", async () => {
    await appAction.login.login_details();
    await appAction.login.Click_On_LoginButton();
  });

  await test.step("Step 2: Navigate to Open New Account", async () => {
    await appAction.openNewAccount.clickOpenNewAccountLink();
  });

  await test.step("Step 3: Create new Savings Account", async () => {
    await appAction.openNewAccount.selectAccountType();
    AccountNumber = await appAction.openNewAccount.OpenNewAccountButton();
    console.log("Created Account Number:", AccountNumber);
  });

  await test.step("Step 4: Verify account creation success message", async () => {
    await appAction.openNewAccount.verifyAccountCreationSuccess();
  });

  await test.step("Step 5: Navigate to Accounts Overview", async () => {
    await appAction.accountOverview.clickAccountsOverview();
  });

  await test.step("Step 6: Validate newly created account number displayed", async () => {
    if (AccountNumber) {
      await appAction.accountOverview.verifyNewAccountNumber(AccountNumber);
    }
  });

});

 test("Scenario 2: Negative Test Case: Validate error message when username and password are blank", async ({appAction}) => {

    await test.step("Step 1: Login without username and password and Verify validation error message", async () => {
      await appAction.login.Click_On_LoginButton();
      await appAction.login.verifyBlankLoginErrorMessage();
    });

  });
