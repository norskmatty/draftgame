module.exports = function(app, Player) {
    app.put ('/players/update', function (req, res) {
        console.log(req.body);
        Player.update(
                        {
                            name: req.body.name
                        },
                        {
                            $set: {
                                posrank: req.body.posrank
                        }
                    },
                    function (err, doc) {
                        if (err) {
                            return console.err (err);
                        }
            
                        Player.find(
                            {name: req.body.name}, 
                                function (err, doc) {
                                    if (err) {
                                        return console.err(err);
                                    }
                                    return res.json (doc);
                                });
                            }
                        );            
    });
};