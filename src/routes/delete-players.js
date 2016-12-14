module.exports = function(app, Player) {
    app.delete ('/players/delete', function (req, res) {
        Player.remove({},function(err,numberRemoved) {
            return res.status(201).json(numberRemoved);
        });
        
    });
};