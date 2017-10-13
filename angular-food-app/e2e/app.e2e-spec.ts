import { AngularFoodAppPage } from './app.po';

describe('angular-food-app App', () => {
  let page: AngularFoodAppPage;

  beforeEach(() => {
    page = new AngularFoodAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
