module.exports = function(app, Player) {
        app.get ('/players/ilblist', function (req, res) {
        Player.find({position:"ILB"}).sort(
            {
                overall: 1
            })
            .exec(function(err,doc) {
                if(err) {
                    console.log(err);
                }
                return res.status(201).json(doc);
        });
    });
};