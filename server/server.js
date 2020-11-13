const express = require('express');
var mongoose = require('mongoose');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost/sadida');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.on('open', ()=>{
  console.log('db connected');
})

app.use(express.json());

app.get('/', (req, res) => {
  res.send('All your base are belong to us');
});

//app.get for all galleries

//app.get for one product

app.listen(PORT, () => {
  console.log(`Taking off every zig at http://localhose:${PORT}`);
});