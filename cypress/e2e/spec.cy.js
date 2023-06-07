import FormPage from "../pageObjects/Form.page";

describe("DemoQA", () => {
  context("Final task", () => {
    beforeEach(() => {
      FormPage.visit();
    });

    it("Fill out form, submit and validate", () =>{
      FormPage.firstName.type("John");
      FormPage.lastName.type("Doe");
      FormPage.email.type("example@email.com");
      FormPage.maleOption.click({force: true});
      FormPage.mobileNumber.type("3765491827");
      FormPage.dateOfBirth.click();
      FormPage.year.select("1930");
      FormPage.month.select("1");
      FormPage.day.contains("28").click();
      FormPage.subjects.type("Eco");
      FormPage.economics.click();
      FormPage.musicCheckBox.click({force: true});
      FormPage.picture.get("input[type=file]").selectFile("files/shrek.JPG");
      FormPage.currentAddress.type("Jonathan Street 9");
      FormPage.stateAndCity.contains("Select State").click({force: true});
      FormPage.NCR.click();
      FormPage.stateAndCity.contains("Select City").click({force:true});
      FormPage.delhi.click({force: true});
      FormPage.submitButton.click({force: true});
      FormPage.formTable.contains("td", "John Doe")
      FormPage.formTable.contains("td", "example@email.com")
      FormPage.formTable.contains("td", "Male")
      FormPage.formTable.contains("td", "3765491827")
      FormPage.formTable.contains("td", "28 January,1930")
      FormPage.formTable.contains("td", "Economics")
      FormPage.formTable.contains("td", "Music")
      FormPage.formTable.contains("td", "shrek.JPG")
      FormPage.formTable.contains("td", "Jonathan Street 9")
      FormPage.formTable.contains("td", "NCR Delhi")
    });
  });
});