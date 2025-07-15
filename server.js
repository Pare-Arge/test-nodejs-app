const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 Test Node.js App v2</h1>
    <p>Deployed via Pare PaaS!</p>
    <p>Updated: ${new Date().toISOString()}</p>
    <p>Build triggered by webhook!</p>
    <p style="color: green;">✅ Automatic deployment working!</p>
    <p>Docker build test: ${Date.now()}</p>
    <p>🎯 CNI Fixed - Build: ${Date.now()}</p>
    <p>🎯 Image tag fixed - Build: ${Date.now()}</p>
  `);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});