module.exports = function(app, Draftorder) {
    app.delete ('/draft/delete', function (req, res) {
        Draftorder.remove({},function(err,numberRemoved) {
            return res.status(201).json(numberRemoved);
        });
        
    });
};