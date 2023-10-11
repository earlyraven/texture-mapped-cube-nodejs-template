const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JavaScript, textures)
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route to serve your HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}. Visit localhost:${PORT} in a web browser to view it.`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`${err}.  Port ${PORT} is already in use. Please close any other server running on port ${PORT} and run again.`);
  } else {
    console.error('An error occurred:', err);
  }
});
