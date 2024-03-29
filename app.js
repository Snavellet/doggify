const express = require('express');
const app = express();
const path = require('path');

// View Engine
app.use(express.static(path.join(__dirname, ('public'))));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Tweaks
app.get('/dog-generator', (req, res) => {
    return res.status(200).render('dog-generator');
});

app.get('/suggestions', (req, res) => {
    return res.status(200).render('suggestions');
});

app.get('/home', (req, res) => {
    return res.status(200).render('index');
});

app.get('/', (req, res) => {
    return res.redirect('home');
});

app.all('*', (req, res) => {
    return res.redirect(`${req.protocol}://${req.get('host')}/home`);
});

app.disable('x-powered-by');

app.use((req, res, next) => {
    res.removeHeader("server");
    
    next();
});


module.exports = app;
