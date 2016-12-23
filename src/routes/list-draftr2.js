module.exports = function(app, Draftorder) {
        app.get ('/players/draftlistr2', function (req, res) {
        Draftorder.find({round:2}).sort(
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