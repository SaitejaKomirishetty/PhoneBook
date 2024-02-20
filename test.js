const fs = require("node:fs");
const content = "Some content!\n";
fs.appendFile("test.txt", content, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("appended successfully");
  }
});
