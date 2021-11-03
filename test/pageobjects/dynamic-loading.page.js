const Page = require("./page.js");

class Example1Page {
  get elLoading() {
    return $("#loading");
  }
  get btnStart() {
    return $("#start button");
  }
  get textFinished() {
    return $("#finish h4");
  }
}

class DynamicLoadingPage extends Page {
  get example1Page() {
    return new Example1Page();
  }
  get linkExample1() {
    return $('a[href="/dynamic_loading/1"]');
  }
  get linkExample2() {
    return $('a[href="/dynamic_loading/2"]');
  }

  open() {
    return super.open("/dynamic_loading");
  }
}

module.exports = new DynamicLoadingPage();
