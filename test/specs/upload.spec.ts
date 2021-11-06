import UploadPage from "../pageobjects/upload.page";

const fileName = "staging-students.csv";

describe("The File Uploader page", () => {
  beforeEach(() => {
    UploadPage.open();
  });

  it("should be able to upload a generic file", async () => {
    const filePath = await browser.uploadFile(`test/resources/${fileName}`);
    await UploadPage.inputFile.setValue(filePath);
    await UploadPage.btnSubmit.click();
    const uploadedFile = await UploadPage.txtUploadedFile.getText();
    expect(uploadedFile).toEqual(fileName);
  });
});
