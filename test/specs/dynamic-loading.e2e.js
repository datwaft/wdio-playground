const DynamicLoadingPage = require("../pageobjects/dynamic-loading.page");

describe("My dynamic loading page", () => {
  it("should wait for an element on page that is hidden", async () => {
    DynamicLoadingPage.open();
    await DynamicLoadingPage.linkExample1.click();
    await DynamicLoadingPage.example1Page.btnStart.click();

    await DynamicLoadingPage.example1Page.elLoading.waitForDisplayed();
    await DynamicLoadingPage.example1Page.elLoading.waitForDisplayed({
      reverse: true,
    });

    expect(
      await DynamicLoadingPage.example1Page.textFinished.getText()
    ).toEqual("Hello World!");
  });
});
