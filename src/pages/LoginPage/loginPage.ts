import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly welcomeMessage: Locator;
  readonly accountServices: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator("//input[@name='username']");
    this.password = page.locator("//input[@name='password']");
    this.loginButton = page.locator("//input[@value='Log In']");
    this.errorMessage = page.locator("//p[contains(text(),'Please enter a username and password')]");
    this.welcomeMessage = page.locator(".smallText");
    this.accountServices = page.locator("#showOverview h1");
    this.logoutLink = page.locator("//a[normalize-space()='Log Out']");  

  }
}
