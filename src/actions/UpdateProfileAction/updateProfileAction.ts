import { expect } from "@playwright/test";
import { UpdateProfilePage } from "../../pages/UpdateProfilePage/updateProfilePage";

export class UpdateProfileAction {
  readonly updateProfilePage: UpdateProfilePage;

  constructor(page: any) {
    this.updateProfilePage = new UpdateProfilePage(page);
  }

  async clickUpdateProfile() {
    await this.updateProfilePage.updateContactLink.click();
  }

  async updateProfile() {
    await this.updateProfilePage.phone.fill("9999999999");
    await this.updateProfilePage.address.fill("New Address");
    await this.updateProfilePage.city.fill("New York");
    await this.updateProfilePage.state.fill("NY");
    await this.updateProfilePage.zipCode.fill("12345");
    await this.updateProfilePage.updateButton.click();
  }

  async verifyUpdateSuccess() {
    await expect(this.updateProfilePage.successMessage).toContainText("Profile Updated");
  }
}
