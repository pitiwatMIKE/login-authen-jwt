const express = require("express");
const app = express();
const cors = require('cors')
const route = require("./routes");
const dotenv = require("dotenv");

dotenv.config();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(route);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
