const express = require("express");
require("dotenv").config();
require("./src/config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const userRouter = require("./src/routers/userRouter.js");

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRouter); // new

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
