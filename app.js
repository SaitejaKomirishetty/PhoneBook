const express = require("express");
const app = express();
const { get, set } = require("./resourse");

app.use(express.json());


// Define a GET route to fetch all phone book entries
app.get("/api/phonebook", (req, res) => {
    console.log("Get method called");
    res.json(get());
});

// Define a post route for posting a phone Book entrie
app.post("/api/phonebook", (req, res) => {
    const body = req.body;
    console.log(body);
    // res.json(get());
    res.json(set(req.body))
});

// Start the server
const port = 1234; // Or any other port you prefer
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
