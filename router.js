module.exports = function(app) {
    const lclen = temp = require("./locales/en.json");
    const lclde = temp = lclen; // temp exists just because my IDE colors it better that way XD
    //                             i know you shouldn't do this in production or anywhere, but 
    //                             this application is not resource hungry enough that this would matter
    //                             in any way
    app.get("/favicon.ico", (req, res) => {
        res.sendFile(__dirname + "/static/pictures/schoki-logo.png");
    });
    app.get("/js/default.js", (req, res) => {
        res.sendFile(__dirname + "/static/js/default.js");
    });
    app.get("/css/default.css", (req, res) => {
        res.sendFile(__dirname + "/static/css/default.css");
    });
    app.get("/pictures/logo.png", (req, res) => {
        res.sendFile(__dirname + "/static/pictures/schoki-logo.png");
    });

    // pug CAN use normal HTML
    app.get('/', function(req, res) {
        if (req.cookies.lcl == "de") {
            res.render(__dirname + "/static/index.pug", lclde);
        } else {
            res.render(__dirname + "/static/index.pug", lclen);
        }
    })
    return module;
}