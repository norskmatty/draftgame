module.exports = function(app, Draftorder) {
        app.get ('/players/draftlist', function (req, res) {
        Draftorder.find().sort(
            {
                overallPick: 1
            })
            .exec(function(err,doc) {
                if(err) {
                    console.log(err);
                }
                return res.status(201).json(doc);
        });
    });
};