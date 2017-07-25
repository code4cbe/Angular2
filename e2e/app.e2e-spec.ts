import { MyStorePage } from './app.po';

describe('my-store App', () => {
  let page: MyStorePage;

  beforeEach(() => {
    page = new MyStorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
