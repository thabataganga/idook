const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const venom = require('venom-bot');



function start(client) {
    client.onMessage((message) => {
      if (message.body === 'Hi') {
        client.sendText(message.from, 'Welcome Venom 🕷');
      }
    });
  }

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.post('/api/world', (req, res) => {
  console.log(req.body);
  venom.create().then((client) => start(client));
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));