import { test as base, expect } from "@playwright/test";
import { RegistrationAction } from "../actions/RegistrationAction/registrationAction";
import RegistrationData from "../testdata/RegistrationData/registrationData.json";
import { LoginAction } from "../actions/LoginAction/loginAction";
import { OpenAccountAction } from "../actions/OpenNewAccountAction/openNewAccountAction";
import { AccountsOverviewAction } from "../actions/AccountsOverviewAction/accountsOverviewAction";
import { TransferFundsAction } from "../actions/TransferFundsAction/transferFundsAction";
import { BillPayAction } from "../actions/BillPayAction/billPayAction";
import { TransactionAction } from "../actions/TransactionAction/transactionAction";
import { UpdateProfileAction } from "../actions/UpdateProfileAction/updateProfileAction";
import { LoanAction } from "../actions/LoanAction/loanAction";

type AppAction = {
  register: RegistrationAction;
  login: LoginAction;
  openNewAccount: OpenAccountAction;
  accountOverview: AccountsOverviewAction;
  transferFunds: TransferFundsAction;
  billPay: BillPayAction;
  transaction: TransactionAction;
  updateProfile: UpdateProfileAction;
  loan: LoanAction;
};

type Fixtures = {
  gotoBaseUrl: void;
  appAction: AppAction;
};

export const test = base.extend<Fixtures>({
  gotoBaseUrl: [
    async ({ page }, use) => {
      await page.goto(RegistrationData.baseUrl);
      await expect(page).toHaveURL(RegistrationData.baseUrl);
      await use();
    },
    { auto: true },
  ],

  appAction: async ({ page }, use) => {
    const appAction: AppAction = {
      register: new RegistrationAction(page),
      login: new LoginAction(page),
      openNewAccount: new OpenAccountAction(page),
      accountOverview: new AccountsOverviewAction(page),
      transferFunds: new TransferFundsAction(page),
      billPay: new BillPayAction(page),
      transaction: new TransactionAction(page),
      updateProfile: new UpdateProfileAction(page),
      loan: new LoanAction(page)
    };
    await use(appAction);
  },
});

export { expect } from "@playwright/test";
