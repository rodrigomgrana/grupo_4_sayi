const express = require("express");
const app = express();
const path = require("path");
app.listen(3030, () => console.log("Trabajando en puerto 3030"));

app.use("/public", express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    let htmlInfo = path.resolve(__dirname, "./views/intro.html");
    res.sendFile(htmlInfo);
})

app.get("/login", (req, res) => {
    let htmlInfo = path.resolve(__dirname, "./views/login.html");
    res.sendFile(htmlInfo);
}) 

app.get("/register", (req, res) => {
    let htmlInfo = path.resolve(__dirname, "./views/register.html");
    res.sendFile(htmlInfo);
})

app.get("/contact", (req, res) => {
    let htmlInfo = path.resolve(__dirname, "./views/contact.html");
    res.sendFile(htmlInfo);
})

app.get("/home", (req, res) => {
    let htmlInfo = path.resolve(__dirname, "./views/home.html");
    res.sendFile(htmlInfo);
})

app.get("/prueba", (req, res) => {
    let htmlInfo = path.resolve(__dirname, "./views/prueba.html");
    res.sendFile(htmlInfo);
})