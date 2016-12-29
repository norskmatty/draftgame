module.exports = function(app, Player, Draftorder) {
    app.put ('/players/update', function (req, res) {
        console.log(req.body);
        Draftorder.update(
                        {
                            overallPick: req.body.draftpos
                        },
                        {
                            $set: {
                                pic: req.body.pic
                        }
                    },
                    function (err, doc) {
                        if (err) {
                            return console.err (err);
                        }
            
                        Draftorder.find(
                            {overallPick: req.body.draftpos}, 
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