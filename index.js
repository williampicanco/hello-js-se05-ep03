//import { appendFile } from "fs";

// index.js
const axios = require("axios")
const express = require("express")
const app = express()

//https://api.github.com/users/williampicanco/followers
const baseURL = "https://api.github.com" //thecatapi.com
const api = axios.create({baseURL})

app.get("/seguidores/:id", (req, res) => {
    let user = req.params.id
    app.get("https://api.github.com/users/${user}/followers").then(ret => {
    res.send(JSON.stringify(ret.data))
    }).catch(e => {
        console.log(e)
        res.send(JSON.stringify(e.response.data))
    })
})
app.listen(3000, _ => console.log("no ar!"))

