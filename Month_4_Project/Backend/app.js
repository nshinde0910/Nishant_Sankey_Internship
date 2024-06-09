const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/final-payment", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define a mongoose schema and model for the form data
const FormDataSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  phone: String,
  cardnumber: String,
  cvc: String,
  exptdate: String,
});

const FormData = mongoose.model("FormData", FormDataSchema);

// Route to handle form submission
app.post("/submit-form", async (req, res) => {
  try {
    // Create a new instance of FormData based on the incoming request
    const formData = new FormData({
      fname: req.body.fname,
      lname: req.body.lname,
      phone: req.body.phone,
      cardnumber: req.body.cardnumber,
      cvc: req.body.cvc,
      exptdate: req.body.exptdate,
    });

    // Save the formData to MongoDB
    await formData.save();

    res.status(201).json({ message: "Form data saved successfully" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
