const express = require("express");
const app = express();
const port = 3000;
const create = require("./routes/products/create");
const read = require("./routes/products/read");
// const delete = require("./routes/products/delete");
// const update = require("./routes/products/update");
const login = require("./routes/users/login")
const registration = require("./routes/users/registration")
const orders = require("./routes/users/orders")
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const corsOptions = { credentials: true, origin: "http://localhost:8080"};
// const corsOptions = { credentials: true, origin: process.env.URL };

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/create", create);
app.use("/read", read);
// app.use("/delete", delete);
// app.use("/update", update);

app.use("/login",login);
app.use("/registration",registration);
app.use("/orders",orders);

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
