const express = require("express");
const app = express();
const port = 3000;
const router = require("express").Router();
const created = require("./routes/create.js");
const read = require("./routes/read");
const deleted = require("./routes/delete.js");
const update = require("./routes/update.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/create", created);
app.use("/read", read);
app.use("/delete", deleted);
app.use("/update", update);

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
