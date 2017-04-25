var express = require('express');
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient
var _db = null


var app = express()

var jsonParser       = bodyParser.json({limit:1024*1024*20, type:'application/json'});
var urlencodedParser = bodyParser.urlencoded({ extended:true,limit:1024*1024*20,type:'application/x-www-form-urlencoding' })
app.use(jsonParser);
app.use(urlencodedParser)


app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor Iniciado!');
});

//mongodb://<dbuser>:<dbpassword>@ds155490.mlab.com:55490/capiroto
MongoClient.connect('mongodb://verion:V&r10n2017@ds111791.mlab.com:11791/leads', function(err, db) {
    if (err) {
        throw err;
    }

    require('./routes/leads.route.js')(app, db)
    console.log('banco de dados conectado')
});