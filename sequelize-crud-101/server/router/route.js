"use strict";

const routes = [require("./routes/company")];

// Add access to the app and db objects to each route
module.exports = function router(app) {
    return routes.forEach(route => {
        route(app);
    });
};
