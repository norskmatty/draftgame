module.exports = function(app, Player) {
        app.get ('/players/list', function (req, res) {
        Player.find (function (err, players) {
            if (err) {
                res.json (err);
            }
            return res.status (201) .json (players);
        });
    });
};