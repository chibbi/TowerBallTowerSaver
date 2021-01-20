module.exports = function() {
    const fs = require("fs");

    const logging = 5;

    if (!fs.existsSync("logs/")) {
        console.log(addTimeStamp() + "\x1b[33m  WARN \x1b[0m - " + getCalling(1) + "Created logs directory");
        fs.mkdirSync("logs/");
    }
    // logging = 0 only Errors
    // logging = 1 Errors and Alerts
    // logging = 2 Errors, Alerts and Warnings
    // dont recommend going below 3
    // logging = 3 Errors, Alerts, Warnings and infos (who uploaded ..)
    // logging = 4 Errors, Alerts, Warnings and infos (who visited)
    // logging = 5 Errors, Alerts, Warnings and infos (who visited) and debug

    module.log = function(text, logheight, parts = 1) {
        text = JSON.stringify(text); // necessary because of the colors
        text = getCalling(parts) + text;
        // should change it to switch case 
        if (logheight == undefined) {
            console.log(addTimeStamp() + "\x1b[33m NOLOGDEFINED \x1b[33m - " + text + "\x1b[0m"); // everything yellow
        } else if (logging >= 0 && logheight == 0) {
            console.log(addTimeStamp() + "\x1b[31m ERROR \x1b[0m - " + text); // red
        } else if (logging >= 1 && logheight == 1) {
            console.log(addTimeStamp() + "\x1b[31m ALERT \x1b[0m - " + text); // red
        } else if (logging >= 2 && logheight == 2) {
            console.log(addTimeStamp() + "\x1b[33m  WARN \x1b[0m - " + text); // yellow
        } else if (logging >= 3 && logheight == 3) {
            console.log(addTimeStamp() + "\x1b[36m  INFO \x1b[0m - " + text); // cyan
        } else if (logging >= 4 && logheight == 4) {
            console.log(addTimeStamp() + "\x1b[36m  INFO \x1b[0m - " + text); // cyan
        } else if (logging >= 5 && logheight == 5) {
            console.log(addTimeStamp() + "\x1b[32m DEBUG \x1b[0m - " + text); // green
        }
    };

    module.printlog = function(text, logheight, parts = 1) {
        text = JSON.stringify(text); // necessary because of the colors
        text = getCalling(parts) + text;
        // should change it to switch case 
        if (logheight == undefined) {
            console.log(addTimeStamp() + "\x1b[33m NOLOGDEFINED \x1b[33m - " + text + "\x1b[0m"); // everything yellow
        } else if (logging >= 0 && logheight == 0) {
            printevent(addTimeStamp() + "\x1b[31m ERROR \x1b[0m - " + text); // red
        } else if (logging >= 1 && logheight == 1) {
            printevent(addTimeStamp() + "\x1b[31m ALERT \x1b[0m - " + text); // red
        } else if (logging >= 2 && logheight == 2) {
            printevent(addTimeStamp() + "\x1b[33m  WARN \x1b[0m - " + text); // yellow
        } else if (logging >= 3 && logheight == 3) {
            printevent(addTimeStamp() + "\x1b[36m  INFO \x1b[0m - " + text); // cyan
        } else if (logging >= 4 && logheight == 4) {
            printelse(addTimeStamp() + "\x1b[36m  INFO \x1b[0m - " + text); // cyan
        } else if (logging >= 5 && logheight == 5) {
            printelse(addTimeStamp() + "\x1b[32m DEBUG \x1b[0m - " + text); // green
        }
    };

    function addTimeStamp() {
        var curdate = new Date();
        text =
            ("0" + curdate.getDate()).slice(-2) +
            "-" +
            ("0" + (curdate.getMonth() + 1)).slice(-2) +
            "-" +
            curdate.getFullYear() +
            "_" +
            ("0" + curdate.getHours()).slice(-2) +
            ":" +
            ("0" + curdate.getMinutes()).slice(-2) +
            ":" +
            ("0" + curdate.getSeconds()).slice(-2);
        return text;
    }

    function printevent(text) {
        fs.appendFile("logs/event.log", "'" + text + "'\n", "utf8", (err) => {
            if (err) throw err;
        });
        console.log(text);
    }

    function printelse(text) {
        fs.appendFile("logs/info.log", "'" + text + "'\n", "utf8", (err) => {
            if (err) throw err;
        });
        console.log(text);
    }

    function getCalling(parts) {
        var e = new Error();
        let frame = e.stack.split("\n")[3];
        // example output: "at Server.<anonymous> (/home/chibbi/GithubRepos/PasswordManagerContainer/index.js:75:9)"
        let lineNumber = frame.split(":")[1];
        // example output: "75"
        let functionName = frame.split(" ")[5];
        // example output: "Server.<anonymous>"
        switch (parts) {
            case 0:
                return "";
            case 1:
                return functionName + ":" + lineNumber + " - ";
            case 2:
                framesec = e.stack.split("\n")[4];
                lineNumsec = framesec.split(":")[1];
                functionSec = framesec.split(" ")[5].split(":")[0];
                return functionSec + ":" + lineNumsec + "." + functionName + ":" + lineNumber + " - ";
            default:
                return functionName + ":" + lineNumber;

        }
    }

    return module;
};