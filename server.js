const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const app = express();

global.__basedir = __dirname;

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(morgan('combined'));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 8080;
app.listen(port, () => {
    console.log(`Running at localhost:${port}`);
});

