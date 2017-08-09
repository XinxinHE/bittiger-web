import { BittigerWebPage } from './app.po';

describe('bittiger-web App', () => {
  let page: BittigerWebPage;

  beforeEach(() => {
    page = new BittigerWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
