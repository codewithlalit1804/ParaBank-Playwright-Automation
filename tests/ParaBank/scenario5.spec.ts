import { test } from "../../src/fixture/fixture";

test("Scenario 5: Customer Profile Update and Loan Request", async ({appAction}) => {

  await test.step("Step 1: Login with valid customer account", async () => {
    await appAction.login.login_details();
    await appAction.login.Click_On_LoginButton();
  });

  await test.step("Step 2: Navigate Update Contact Information", async () => {
    await appAction.updateProfile.clickUpdateProfile();
  });

  await test.step("Step 3: Update customer profile details", async () => {
    await appAction.updateProfile.updateProfile();
  });

  await test.step("Step 4: Verify profile update success", async () => {
    await appAction.updateProfile.verifyUpdateSuccess();
  });

  await test.step("Step 5: Navigate Request Loan", async () => {
    await appAction.loan.clickRequestLoan();
  });

  await test.step("Step 6: Submit valid loan request", async () => {
    await appAction.loan.requestLoan();
  });

  await test.step("Step 7: Verify loan approval/rejection response", async () => {
    await appAction.loan.verifyLoanResponse();
  });
});
