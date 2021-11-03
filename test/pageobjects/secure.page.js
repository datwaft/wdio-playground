const Page = require("./page");

class SecurePage extends Page {
  get flashAlert() {
    return $("#flash");
  }
  get btnLogout() {
    return $('a[href="/logout"]');
  }
}

module.exports = new SecurePage();
