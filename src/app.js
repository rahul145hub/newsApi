console.clear();
// -----------------------------------------------------------------------------
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

const port = process.env.PORT || 7777;
const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

const route = require('./routes/route.js');

app.use('/', route);


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});