const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public'); 
const port = process.env.PORT || 3000;

const data = require('./data/Webdev_data2.json');

app.get('/data', function (req, res) {
  res.json(data);
})

app.use(express.static(publicPath));


app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});
