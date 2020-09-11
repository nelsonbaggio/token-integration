const uuidv4 = require('uuid').v4;
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors({
    origin: '*'
}));

//Simulando uma base de dados
const persons = {};
const tokens = {};
persons['2807a99f-a511-498c-95c8-3c4f1ac182ba'] = { nome: 'Nelson', idade: 31 };

app.get('/token/:id', (req, res) => {
  const token = uuidv4();
  tokens[token] = req.params.id;
  res.send(token);
});

app.get('/person/:token', (req, res) => {
    res.send(persons[tokens[req.params.token]]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
