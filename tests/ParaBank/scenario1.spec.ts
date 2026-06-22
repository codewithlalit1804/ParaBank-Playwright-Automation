import { test } from "../../src/fixture/fixture";

test("Scenario 1: New Customer Registration and Login Validation", async ({appAction}) => {
    
  let userData: any;
  let loginUser: any;

  await test.step("Step 1: Register new customer with unique test data", async () => {
    await appAction.register.clickRegister();
    userData = await appAction.register.registration_details();
    await appAction.register.registerCustomer(userData);
  });

  await test.step("Step 2: Verify customer registration success message", async () => {
    await appAction.register.verifyRegistrationSuccessMessage();
  });

  await test.step("Step 3: Logout from application", async () => {
    await appAction.login.Click_On_LogoutButton();
  });

  await test.step("Step 4: Login using newly created customer credentials", async () => {
    loginUser = await appAction.login.login_details();

    await appAction.login.Click_On_LoginButton();
  });

  await test.step("Step 5: Verify welcome customer message", async () => {
    await appAction.login.verifyWelcomeCustomer(loginUser);
  });

  await test.step("Step 6: Verify Account Services / Accounts Overview page", async () => {
    await appAction.login.verifyAccountServicesPage();
  });
});
