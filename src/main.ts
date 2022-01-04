export const greeter = (person: string) => {
  return `Hello, ${person}!`;
};

function testGreeter() {
  const user = "Grant";
  Logger.log(greeter(user));
}

function doGet(_e: any) {
  let max = 10;
  let min = 1;
  let result =
    (Math.floor(Math.random() * (max - min)) + min) % 2 == 0 ? "OK" : "NG";
  var output = ContentService.createTextOutput(result);
  output.setMimeType(ContentService.MimeType.TEXT);
  return output;
}
