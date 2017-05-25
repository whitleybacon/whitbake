import { WhitbakePage } from './app.po';

describe('whitbake App', () => {
  let page: WhitbakePage;

  beforeEach(() => {
    page = new WhitbakePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
