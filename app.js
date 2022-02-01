const EXPRESS = require('express');
const APP = EXPRESS();

APP.listen(process.env.PORT || 3030, function () {
    console.log('Servidor ejecutándose en el puerto 3030');
});

APP.use(EXPRESS.static(__dirname + '/public'));

APP.use(EXPRESS.static(__dirname + '/views'));

APP.get('/', function (req,res) {
    res.sendFile(__dirname + '/views/index.html');
});

APP.get('/register', function (req,res) {
    res.sendFile(__dirname + '/views/register.html');
});

APP.get('/login', function (req,res) {
    res.sendFile(__dirname + '/views/login.html');
});