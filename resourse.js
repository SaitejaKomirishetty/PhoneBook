const fs = require("fs");

// Path to your JSON file
const filePath = "data.json";

const get = (callback) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      callback(err);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
    //   console.log("Data from file:", jsonData);
      callback(null, jsonData);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      callback(error);
    }
  });
};

const set = (newEntry, callback) => {
  get((err, data) => {
    if (err) {
      callback(err);
      return;
    }
     if (!Array.isArray(data)) {
       data = [];
     }

    // Check if the name already exists
   const existingEntry = data.find((entry) => entry.phone === newEntry.phone);
   if (existingEntry) {
     callback( "Phone no already exists" );
     return;
   }
    data.push(newEntry);

    // Write the updated data back to the file
    fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        callback(err);
        return;
      }
      console.log("New entry added successfully!");
      callback(null, newEntry);
    });
  });
};


module.exports = {
    get,
    set,
};
