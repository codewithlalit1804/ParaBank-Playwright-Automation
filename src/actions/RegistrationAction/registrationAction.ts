import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { writeFileSync } from "fs";
import { RegistrationPage } from "../../pages/RegistrationPage/registrationPage";
import RegistrationData from "../../testdata/RegistrationData/registrationData.json";

export class RegistrationAction {
  readonly registrationPage: RegistrationPage;

  constructor(page: any) {
    this.registrationPage = new RegistrationPage(page);
  }

  async clickRegister() {
    await this.registrationPage.registerLink.click();
    const currentUrl = this.registrationPage.page.url();
    console.log("After click URL:", currentUrl.split(";")[0]);
  }

  async registration_details() {
    const randomNumber = faker.number.int({ min: 100000, max: 999999 });
    const userData = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      phoneNumber: faker.helpers.fromRegExp(/[6-9][0-9]{9}/),
      ssn: faker.number.int({ min: 100000000, max: 999999999 }).toString(),
      username: `${faker.person.firstName()}${randomNumber}`,
      password: `Test@${randomNumber}`,
      confirmPassword: `Test@${randomNumber}`,
    };

    const existingUsers = Array.isArray(RegistrationData.generatedUserData)
  ? RegistrationData.generatedUserData
  : [];


const updatedUsers =
  existingUsers.length >= 10 
    ? [userData] 
    : [...existingUsers, userData];


const updatedRegistrationData = {
  ...RegistrationData,
  generatedUserData: updatedUsers,
};


writeFileSync(
  "src/testdata/RegistrationData/registrationData.json",
  JSON.stringify(updatedRegistrationData, null, 2),
);

    console.log("========== Complete Registration Data ==========");
    console.log(userData);
    console.log("==========================================");
    return userData;
  }

  async registerCustomer(data: any) {
    await this.registrationPage.firstName.fill(data.firstName);
    await this.registrationPage.lastName.fill(data.lastName);
    await this.registrationPage.address.fill(data.address);
    await this.registrationPage.city.fill(data.city);
    await this.registrationPage.state.fill(data.state);
    await this.registrationPage.zipCode.fill(data.zipCode);
    await this.registrationPage.phoneNumber.fill(data.phoneNumber);
    await this.registrationPage.ssn.fill(data.ssn);
    await this.registrationPage.username.fill(data.username);
    await this.registrationPage.password.fill(data.password);
    await this.registrationPage.confirmPassword.fill(data.confirmPassword);
    await this.registrationPage.registerButton.click();
  }

  async verifyRegistrationSuccessMessage() {
    await expect(this.registrationPage.successMessage).toBeVisible();
  }
}
