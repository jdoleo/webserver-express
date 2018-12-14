const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' })

    //res.write('Hola mundo');
    let salida = {
        nombre: 'Jose Doleo',
        edad: 41,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();

}).listen(3000);

console.log('Escuchando el puerto 3000');