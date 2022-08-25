const express = require("express");
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

app.listen(4000, () => {
    console.log("Server running on port 4000");
});