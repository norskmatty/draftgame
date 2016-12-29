module.exports = function(app, Users, passport) {
    
    app.put ('/team/choose', function (req, res) {
       Users.update(
                        {
                            _id: req.session.passport.user
                        },
                        {
                            $set: {
                                team: req.body.team
                        }
                    },
                    function (err, doc) {
                        if (err) {
                            return console.err (err);
                        }
            
                        Users.find(
                            {_id: req.session.passport.user}, 
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