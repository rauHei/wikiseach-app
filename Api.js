const express = require("express");
require('dotenv').config()
const { wikisearch } = require("./wikisearch");

const cors = require("cors");



const app = express();

app.use(cors());

app.use(express.static('build'))


app.get("/wiki", (req, res, next) => {
    wikisearch(req.query.haku, (error, data) => {
        if (error) {
            res.end(error);
        } else {
            res.json(data);

        }
    });
});

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});