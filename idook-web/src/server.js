const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const banco = require(`./banco`);
const stages = require('./stages');
const venom = require('venom-bot');

venom.create().then((client) => start(client));
function start(client) {
    client.onMessage((message) => {
      
      if (message.body && message.chat.isGroup === false) {
       // console.log(message.contact.verifiedName)
        client.sendText(message.from, 'Olá, bem vindo! Eu sou a Sintia, assistente virtual da *Thabata Ganga* 🤖 Ainda estou em treinamento 💪');
      }
    });
  }

function getStage(user) {
  return banco.db[user].stage;
}


app.listen(port, () => console.log(`Listening on port ${port}`));