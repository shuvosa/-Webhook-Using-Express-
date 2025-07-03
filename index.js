const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use body-parser to parse incoming JSON data
app.use(bodyParser.json());

// Endpoint to handle webhook events
app.post('/webhook', (req, res) => {
  const event = req.body; // Hookdeck event payload

  console.log(event);

  // Handle the event based on the type
  if (event.type === 'some.event.type') {
    console.log('Received event:', event);
    // Process the event here...
  }

  // Send a response to acknowledge receipt of the event
  res.status(200).send('Webhook received');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
