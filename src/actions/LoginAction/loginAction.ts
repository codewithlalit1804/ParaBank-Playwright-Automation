import { expect } from "@playwright/test";
import { writeFileSync, readFileSync } from "fs";
import { LoginPage } from "../../pages/LoginPage/loginPage";
import LoginData from "../../testdata/LoginData/loginData.json";

export class LoginAction {
  readonly loginPage: LoginPage;

  constructor(page: any) {
    this.loginPage = new LoginPage(page);
  }

   async Click_On_LogoutButton() {
    await this.loginPage.logoutLink.click();
  }

  async login_details() {
    const RegistrationData = JSON.parse(readFileSync("src/testdata/RegistrationData/registrationData.json","utf-8"));
    const users = RegistrationData.generatedUserData;
    const lastUser = users[users.length - 1];
    const loginUser = {
      firstName: lastUser.firstName,
      lastName: lastUser.lastName,
      username: lastUser.username,
      password: lastUser.password,
    };
    const updatedLoginData = {
      ...LoginData,

      loginUser: loginUser,
    };

    writeFileSync(
      "src/testdata/LoginData/loginData.json",
      JSON.stringify(updatedLoginData, null, 2),
    );
    //console.log("Login Data Saved:", loginUser);
    await this.loginPage.username.fill(loginUser.username);
    await this.loginPage.password.fill(loginUser.password);
    return loginUser;
  }

  async Click_On_LoginButton() {
    await this.loginPage.loginButton.click();
  }

  async verifyAccountServicesPage() {
    await this.loginPage.page.waitForLoadState("networkidle");
    console.log("Current URL:", this.loginPage.page.url());
    console.log("Page Title:", await this.loginPage.page.title());
    await expect(this.loginPage.accountServices).toBeVisible();
    await expect(this.loginPage.accountServices).toContainText("Accounts Overview");
  }

  async verifyWelcomeCustomer(loginUser: any) {
    await expect(this.loginPage.welcomeMessage).toContainText(`Welcome ${loginUser.firstName} ${loginUser.lastName}`);
  }
  
   async verifyBlankLoginErrorMessage() {
    await expect(this.loginPage.errorMessage).toBeVisible();
    await expect(this.loginPage.errorMessage).toContainText("Please enter a username and password.");
  }
   
}
