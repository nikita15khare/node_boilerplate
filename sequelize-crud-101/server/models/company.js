const Sequelize = require("sequelize");
const sqlClient = require("../config/db").sequelize;

const Company = sqlClient.define(
    "Company",
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: Sequelize.STRING,
            unique: true
        }
    },
    {
        tableName: "company_master",
        underscored: true
    }
);

Company.sync().catch(error => console.error(error));

module.exports = Company;
