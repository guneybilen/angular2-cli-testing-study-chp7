import { TtdChp7Page } from './app.po';

describe('ttd-chp7 App', () => {
  let page: TtdChp7Page;

  beforeEach(() => {
    page = new TtdChp7Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
