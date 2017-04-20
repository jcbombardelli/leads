module.exports = function(app, _db) {

    app.get('/', function(req, res) {
        res.send('ServerOK!');
    })

    app.get('/api/leads', function(req, res) {

       _db.collection('leads').find().toArray(function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            res.send(result);
        });

    });

    app.post('/api/leads', function(req, res) {

        try {
                        
            var collection = _db.collection('leads')

            collection.save(req.body)
                .then(function(result) {
                    res.status(200).send(result);
                })
                .catch(function(error) {
                    console.log(error);
                    res.status(500).send(error);
                })

        } catch (error) {
            res.status(500).send(error);

        }
    })
}