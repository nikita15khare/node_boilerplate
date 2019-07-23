"use strict";

const Sequelize = require("sequelize");

const sequelize = new Sequelize("tvm_dev", "root", "****", {
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000000
    },
    connectTimeout: 10000000
});
sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch(err => {
        console.log("Unable to connect to the database");
    });

const db = {
    sequelize
};

module.exports = db;
