const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./frontend/src/img/products");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", express.static(__dirname + "/src/"));
app.use("/test", express.static(__dirname + "/test/"));

app.post("/", upload.single("avatar"), async function (req, res, next) {
  res.send(console.log("Upado"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
