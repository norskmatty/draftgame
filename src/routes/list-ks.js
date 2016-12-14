module.exports = function(app, Player) {
        app.get ('/players/klist', function (req, res) {
        Player.find({position:"K"}).sort(
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