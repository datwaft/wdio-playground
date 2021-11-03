const MainPage = require("../pageobjects/main.page");

describe("My main page", () => {
  it("should have correct number of items", async () => {
    MainPage.open();
    await expect(MainPage.listItems).toBeElementsArrayOfSize({ gte: 1 });
  });
});
