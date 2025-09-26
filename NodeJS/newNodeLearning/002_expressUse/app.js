const express = require("express")

const app = express()


app.use(() => {
    console.log(`Server running on port 3000`);
})