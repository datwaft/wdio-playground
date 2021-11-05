import Page from "./page";

class AddRemoveElementsPage extends Page {
  get btnAddElement() {
    return $('[onclick="addElement()"]');
  }
  get btnDeleteElement() {
    return $$('[onclick="deleteElement()"]');
  }

  open() {
    return super.open("/add_remove_elements/");
  }
}

export default new AddRemoveElementsPage();
