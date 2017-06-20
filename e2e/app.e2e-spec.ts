import { InfairePage } from './app.po';

describe('infaire App', () => {
  let page: InfairePage;

  beforeEach(() => {
    page = new InfairePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
