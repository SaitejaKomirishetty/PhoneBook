const express = require("express");
const app = express();
const { get, set,search } = require("./resourse");

app.use(express.json());


// Define a GET route to fetch all phone book entries
app.get("/api/phonebook", (req, res) => {
    console.log("Get method called");
    get((err, data) => {
      if (err) {
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      res.json(data);
    });
});

app.get("/api/phonebook/search",((req,res) => {
  console.log("Get methood called for searching");
  const query = req.query.search;
  search(query,(err,data)=>{
    if(err){
      res.status(500).json({error: "Error occured"});
      return;
    }
    console.log("===>",data);
    res.json(data);
  })
}))
// Define a post route for posting a phone Book entrie
app.post("/api/phonebook", (req, res) => {
  console.log("POST method called");
  const newEntry = req.body;
  set(newEntry, (err, data) => {
    if (err) {
      res.status(500).json({ error: err });
      return;
    }
    res.status(201).json(data);
  });
});

// Start the server
const port = 1234; // Or any other port you prefer
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
