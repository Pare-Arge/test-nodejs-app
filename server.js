const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 Test Node.js App</h1>
    <p>Deployed via Pare PaaS!</p>
    <p>Time: ${new Date().toISOString()}</p>
  `);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});