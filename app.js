const EXPRESS = require('express');
const APP = EXPRESS();

APP.listen(3030, function () {
    console.log('Servidor ejecutándose en el puerto 3030');
});

APP.use(EXPRESS.static(__dirname + '/public'));

APP.get('/', function (req,res) {
    res.sendFile(__dirname + '/views/index.html');
});