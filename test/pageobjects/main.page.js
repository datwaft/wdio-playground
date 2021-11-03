const Page = require("./page.js");

class MainPage extends Page {
  get listItems() {
    return $$("ul li");
  }

  open() {
    return super.open("/");
  }
}

module.exports = new MainPage();
