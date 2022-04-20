const express = require("express");
const app = express();
const port = 3000;
// const created = require("./routes/create.js");
const read = require("./routes/read");
// const deleted = require("./routes/delete.js");
// const update = require("./routes/update.js");
// const cookieParser = require("cookie-parser");
const cors = require("cors");

const corsOptions = { credentials: true, origin: process.env.URL || "*" };
app.use(cors(corsOptions));
// app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use("/create", created);
app.use("/read", read);
// app.use("/delete", deleted);
// app.use("/update", update);

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
