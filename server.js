require("dotenv").config();

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes"));

// mysql connect

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})