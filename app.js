const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Middleware: Servir contenido estático
app.use(express.static('public'));

// app.get('/hola-mundo', (req, res) => {
//   res.send('Hello World');
// });

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node',
  });
});

// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html');
// });

app.get('/generic', (req, res) => {
  //   res.sendFile(__dirname + '/public/elements.html');
  res.render('generic', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node',
  });
});

app.get('/elements', (req, res) => {
  //   res.sendFile(__dirname + '/public/elements.html');
  res.render('elements', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node',
  });
});

app.get('*', (req, res) => {
  //   res.sendFile(__dirname + '/public/404/index.html');
  res.render('elements', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node',
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
