const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const posts = require("./routes/posts");

const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(express.json());
app.use(cors());

app.use("/api/posts", posts);

const port = process.env.PORT || 6000;

app.listen(port, console.log(`Server logged on Port: ${port}`));
