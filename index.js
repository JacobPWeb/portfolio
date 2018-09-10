const express = require('express');
const app = Express();

app.get('/', homepage);

const homepage = (req, res) => {
  res.send('hello world');
}

app.listen(8080, () => console.log('listening on port 8080'));