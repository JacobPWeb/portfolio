const express = require('express');
const app = express();
const pagesBase = `${__dirname}/pages`
const [homepageref, aboutpageref, portfolioref] = [`${pagesBase}/homepage`, `${pagesBase}/aboutpage`, `${pagesBase}/portfoliopage`]

const homepage = (req, res) => {
  res.sendFile(`/${homepageref}/home.html`);
}
const aboutpage = (req, res) => {
  res.sendFile()
}
const portfoliopage = (req, res) => {
  res.sendFile()
}

app.get('/', homepage);
app.listen(8080, () => console.log('listening on port 8080'));