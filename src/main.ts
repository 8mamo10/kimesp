const greeter = (person: string) => {
  return `Hello, ${person}!`;
};

function testGreeter() {
  const user = "Grant";
  Logger.log(greeter(user));
}

function doGet(_e: any) {
  var output = ContentService.createTextOutput("hoge");
  output.setMimeType(ContentService.MimeType.TEXT);
  return output;
}
