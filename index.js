const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start of /docs route
app.get('/docs', (req, res) => {
  res.send(`
    <h1>Project Documentation</h1>
    <p>This project is a simple Node.js application that uses the Express framework to create a server. The server has two endpoints:</p>
    <ul>
      <li><strong>/</strong>: Returns "Hello World".</li>
      <li><strong>/docs</strong>: Displays this documentation.</li>
    </ul>
    <h2>File Structure</h2>
    <pre>
      hello-world-node-app/
        
        .gitignore
        README.md
        index.js
        package.json
        package-lock.json
    </pre>
    <h2>Dependencies</h2>
    <p>The project uses the following dependencies:</p>
    <ul>
      <li><strong>Express</strong>: A minimal and flexible Node.js web application framework.</li>
    </ul>
    <h2>How to Run</h2>
    <p>To run the project, use the following command:</p>
    <pre>npm start</pre>
  `);
});
// End of /docs route

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});