const express = require("express");
const bodyParse = require("body-parser");

const app = express();
const port = 2100;

/* Middleware */
app.use(express.json());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

// Routes
const viewer = require("./routes/viewers");
app.use("/viewer", viewer);

app.listen(port, () => {
   console.log("listening on port", port);
});
