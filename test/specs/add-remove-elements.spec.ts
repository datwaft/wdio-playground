import AddRemoveElementsPage from "../pageobjects/add-remove-elements.page";

const initialNumberOfElements = 4;

describe("The Add/Remove Elements page", () => {
  beforeEach(async () => {
    AddRemoveElementsPage.open();
    for (let i = 0; i < initialNumberOfElements; i++) {
      await AddRemoveElementsPage.btnAddElement.click();
    }
  });

  it("should be able to add an element", async () => {
    await AddRemoveElementsPage.btnAddElement.click();
    expect(await AddRemoveElementsPage.btnDeleteElement).toHaveLength(
      initialNumberOfElements + 1
    );
  });

  it("should be able to remove an element", async () => {
    await AddRemoveElementsPage.btnDeleteElement[0].click();
    expect(await AddRemoveElementsPage.btnDeleteElement).toHaveLength(
      initialNumberOfElements - 1
    );
  });

  it("should be able to remove all elements", async () => {
    await AddRemoveElementsPage.btnDeleteElement.forEach(async $e => {
      await $e.click();
    });
    expect(await AddRemoveElementsPage.btnDeleteElement).toHaveLength(0);
  });
});
