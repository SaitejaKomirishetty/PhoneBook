const fs = require("fs");

// Path to your JSON file
const filePath = "data.json";

const get = () => {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }

        try {
            // Parse the JSON data
            const jsonData = JSON.parse(data);

            // Now you can use the jsonData object which contains your data
            return data;
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    });
};

const set = (newEntriee) => {
    console.log("runing a post call and the new entriee is : ", newEntriee);
    phoneBookEntries.push(newEntriee);
    return newEntriee;
};

module.exports = {
    get,
    set,
};
