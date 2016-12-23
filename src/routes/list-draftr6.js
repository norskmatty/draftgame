module.exports = function(app, Draftorder) {
        app.get ('/players/draftlistr6', function (req, res) {
        Draftorder.find({round:6}).sort(
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