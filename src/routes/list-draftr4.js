module.exports = function(app, Draftorder) {
        app.get ('/players/draftlistr4', function (req, res) {
        Draftorder.find({round:4}).sort(
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