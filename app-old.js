const http = require('http');
const port = 8080;
http
  .createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' });

    // const persona = {
    //   id: 1,
    //   nombre: 'Fernando',
    // };
    // res.write('id; nombre\n');
    // res.write('1; Maria\n');
    // res.write('2; Fernando\n');
    // res.end();

    res.write('Hola Mundo');
    res.end();
  })
  .listen(port);

console.log('Escuchando el puerto', 8080);
