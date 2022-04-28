const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send("<h1 style='color: red;'>Good day to you sir!</h1>")
})
app.get('/blue', (req, res) => {
    res.send("<h1 style='color: blue;'>Good evening to you sir!</h1>")
})

app.listen(3000, () => {
    console.log("listening")
})

