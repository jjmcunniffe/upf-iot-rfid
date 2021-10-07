const express = require('express');
const app = express();

app.get('/', ({res}) => {
    res.send("Hello!");
});

const APP_PORT = process.env.APP_PORT || 8080;
app.listen(APP_PORT, () => {
    console.log(`App running on port ${APP_PORT}`);
});