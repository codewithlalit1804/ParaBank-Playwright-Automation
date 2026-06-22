import { Page, Locator } from "@playwright/test";

export class RegistrationPage {
  readonly page: Page;
  readonly registerLink: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly address: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly zipCode: Locator;
  readonly phoneNumber: Locator;
  readonly ssn: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly registerButton: Locator;
  readonly welcomeMessage: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.registerLink = page.locator("//a[normalize-space()='Register']");
    this.firstName = page.locator("//input[@id='customer.firstName']");
    this.lastName = page.locator("//input[@id='customer.lastName']");
    this.address = page.locator("//input[@id='customer.address.street']");
    this.city = page.locator("//input[@id='customer.address.city']");
    this.state = page.locator("//input[@id='customer.address.state']");
    this.zipCode = page.locator("//input[@id='customer.address.zipCode']");
    this.phoneNumber = page.locator("//input[@id='customer.phoneNumber']");
    this.ssn = page.locator("//input[@id='customer.ssn']");
    this.username = page.locator("//input[@id='customer.username']");
    this.password = page.locator("//input[@id='customer.password']");
    this.confirmPassword = page.locator("//input[@id='repeatedPassword']");
    this.registerButton = page.locator('//input[@value="Register"]');
    this.welcomeMessage  = page.locator("//p[@class='smallText']");
    //this.successMessage = page.locator("//p[contains(text(),'Your account was created successfully. You are now logged in.')]");
    this.successMessage = page.locator("p", {hasText: "Your account was created successfully"});
    
  }
}
