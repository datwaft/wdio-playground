import MainPage from "../pageobjects/main.page";

describe("The Main page", () => {
  beforeEach(() => {
    MainPage.open();
  });

  it("should have the proper heading text", async () => {
    const headingText = await MainPage.txtTitle.getText();
    expect(headingText).toEqual("Welcome to the-internet");
  });

  it("should have the proper example list heading", async () => {
    const headingText = await MainPage.txtExampleListTitle.getText();
    expect(headingText).toEqual("Available Examples");
  });

  it("should have the proper amount of example list items", async () => {
    expect(await MainPage.listExample).toHaveLength(44);
  });

  it("should have every example list item containing a link", async () => {
    const exampleList = await MainPage.listExample;
    exampleList.forEach(async (item: any) => {
      const link = await item.$("[role=link]");
      expect(link).toExist();
    });
  });

  it("should have the proper footer text", async () => {
    const footerText = await MainPage.txtFooter.getText();
    expect(footerText).toEqual("Powered by Elemental Selenium");
  });
});
