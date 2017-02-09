import { FridgePage } from './app.po';

describe('fridge App', function() {
  let page: FridgePage;

  beforeEach(() => {
    page = new FridgePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
