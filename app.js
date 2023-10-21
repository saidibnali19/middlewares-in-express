const express = require("express");
const app = express();

const PORT = 3000;


app.use(myLogger);
app.use(requestTime)

app.get("/", (req, res) => {
    let responseText = "Hello world!<br>"
    responseText += `Requested at: ${req.requestTime}`
    res.send(responseText);
});

app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`)
);

function myLogger(req, res, next) {
    console.log("Logged");
    next();
}

function requestTime(req, res, next) {
    req.requestTime = Date.now()
    next()
}