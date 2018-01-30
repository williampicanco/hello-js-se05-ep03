// index2.js
const axios = require("axios")
//const baseURL = "https://api.github.com" //"https://api.github.com/search/repositories?q=axios"
const api = axios.create({ 
    baseURL: "https://api.github.com"
})

const params = { q : "axios"}

api.get("/search/repositories", { params }).then(ret => console.log(ret.data))
//axios.get(url).then(ret => console.log(ret.data))