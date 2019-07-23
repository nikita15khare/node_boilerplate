"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const passport = require("passport");
const db = require("./server/config/db.js");
const env = require("./server/config/env");
const router = require("./server/router/route");
require("./server/models/company");

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(passport.initialize());
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
    res.header("Content-Type", "application/json");
    next();
});
router(app);

module.exports = app;
