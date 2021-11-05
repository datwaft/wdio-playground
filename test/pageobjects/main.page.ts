import Page from "./page";

class MainPage extends Page {
  get txtTitle() {
    return $(".heading");
  }
  get txtExampleListTitle() {
    return $("h2");
  }
  get listExample() {
    return $$("ul > li");
  }
  get txtFooter() {
    return $("#page-footer");
  }

  open() {
    return super.open("/");
  }
}

export default new MainPage();
