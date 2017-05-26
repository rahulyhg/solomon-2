import { Solomon2Page } from './app.po';

describe('solomon2 App', () => {
  let page: Solomon2Page;

  beforeEach(() => {
    page = new Solomon2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
