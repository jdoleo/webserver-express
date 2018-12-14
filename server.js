const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (_req, res) => {
    res.render('home', {
        nombre: 'jose d\'Oleo'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

// app.get('/data', (req, res) => {
//     res.send('Hola data');
// });

//app.listen(3000);

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});