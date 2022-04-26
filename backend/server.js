const express = require("express");
const app = express();
const port = 3000;
const create = require("./routes/products/create");
const read = require("./routes/products/read");
// const delete = require("./routes/products/delete");
// const update = require("./routes/products/update");
const cors = require("cors");

const corsOptions = { credentials: true, origin: process.env.URL || "*" };
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/create", create);
app.use("/read", read);
// app.use("/delete", delete);
// app.use("/update", update);

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
