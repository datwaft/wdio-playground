import Page from "./page";

class UploadPage extends Page {
  get inputFile() {
    return $("input[type=file]");
  }
  get btnSubmit() {
    return $(".button[type=submit]");
  }
  get txtUploadedFile() {
    return $("#uploaded-files");
  }

  open() {
    return super.open("/upload");
  }
}

export default new UploadPage();
