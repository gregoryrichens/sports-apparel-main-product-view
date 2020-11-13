const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('All your base are belong to us');
});

app.listen(port, () => {
  console.log(`Taking off every zig at http://localhose:${PORT}`);
});