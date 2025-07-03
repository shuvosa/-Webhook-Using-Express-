# Webhook Receiver with Express and Hookdeck

This project is a simple Node.js application that receives webhook events using [Express](https://expressjs.com/) and [body-parser](https://www.npmjs.com/package/body-parser). It is designed to work with [Hookdeck](https://hookdeck.com/) or any service that sends webhooks.

## Features

- Listens for HTTP POST requests at `/webhook`
- Parses incoming JSON payloads
- Logs all received events to the console
- Handles events based on their `type` property
- Sends a 200 OK response to acknowledge receipt

## Project Structure

```
webhook_hookdeck/
│
├── index.js         # Main server code
├── package.json     # Project dependencies
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [npm](https://www.npmjs.com/)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/webhook_hookdeck.git
   cd webhook_hookdeck
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

## Usage

1. **Start the server:**

   ```sh
   node index.js
   ```

   The server will listen on port `3000` by default.

2. **Expose your local server (optional):**

   If you want to receive webhooks from external services, use a tunneling service like [ngrok](https://ngrok.com/) or [Hookdeck](https://hookdeck.com/) to expose your local server:

   ```sh
   ngrok http 3000
   ```

   Use the generated public URL as your webhook endpoint, e.g., `https://xxxxxx.ngrok.io/webhook`.

3. **Send a test webhook:**

   You can use `curl` or Postman to send a test event:

   ```sh
   curl -X POST http://localhost:3000/webhook \
     -H "Content-Type: application/json" \
     -d '{"type":"some.event.type","data":{"foo":"bar"}}'
   ```

   You should see the event logged in your terminal.

## Example Code

See [`index.js`](index.js):

```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const event = req.body;
  console.log(event);

  if (event.type === 'some.event.type') {
    console.log('Received event:', event);
    // Process the event here...
  }

  res.status(200).send('Webhook received');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
```

## Dependencies

- [express](https://www.npmjs.com/package/express)
- [body-parser](https://www.npmjs.com/package/body-parser)

See [`package.json`](package.json) for details.

## License

This project is open source and available under the [MIT License](LICENSE).

---
