"use strict";

const env = {
    PORT: process.env.PORT || 3001,
    DATABASE_URL: process.env.DATABASE_URL || "jdbc:mysql://localhost:3306/sequelize_blog_post",
    DATABASE_NAME: process.env.DATABASE_NAME || "sequelize_blog_post",
    DATABASE_HOST: process.env.DATABASE_HOST || "localhost",
    DATABASE_USERNAME: process.env.DATABASE_USERNAME || "root",
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || "mysql9@M",
    DATABASE_PORT: process.env.DATABASE_PORT || 27017,
    DATABASE_DIALECT: process.env.DATABASE_DIALECT || "mysql"

    // NODE_ENV: process.env.NODE_ENV || "development"
};

module.exports = env;
