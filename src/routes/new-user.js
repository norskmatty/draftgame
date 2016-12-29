module.exports = function (app, passport, Users, bcrypt) {

    app.post ('/new-user', function (req, res) {
    if (! req.body) {
        return res.status(400).json ({
            response: 'error',
            message: 'no request'
        });
    }
    
    if( ! ('username' in req.body)) {
        return res.status(200).json ({
            response: 'error',
            message: 'Username missing'
        });
    }
    
    var username = req.body.username;
    
    if (typeof username !== 'string') {
        return res.status(200).json ({
            response: 'error',
            message: 'Incorrect username field type'
        });
    }
    
    username = username.trim ();
    
    if (username === '') {
        return res.status(200).json ({
            response: 'error',
            message: 'Incorrect field length: username'
        });
    }
    
    Users.find ({
        username: username
    }, function (err, doc) {
        if (err) {
            return console.err (err);
        }
        if (doc.length > 0) {
            return res.json({
                response: 'error',
                message: 'Username already exists'
            });
        }
        else {
            
            if ( ! ('password' in req.body)) {
                return res.status(200).json ({
                    response: 'error',
                    message: 'Password missing'
                });
            }
    
            var password = req.body.password;
    
            if (typeof password !== 'string') {
                return res.status(200).json ({
                    response: 'error',
                    message: 'Incorrect password field type'
                });
            }
    
            password = password.trim();
    
            if(password === '') {
                return res.status(200).json ({
                    response: 'error',
                    message: 'Incorrect field length: password'
                });
            }
    
            bcrypt.genSalt (10, function (err, salt) {
                if (err) {
                    return res.status(500).json ({
                        message: 'Internal server error'
                    });
                }
        
                bcrypt.hash (password, salt, function (err, hash) {
                    if (err) {
                        return res.status(500).json ({
                            message: 'Internal server error'
                        });
                }
                
                console.log(username + password);
            
                Users.create({
                    username : username,
                    password : hash,
                    team : "Seattle Seahawks"
                    }, function (err, user) {
                        if (err) {
                            console.log(err);
                            return res.status(500).json ({
                                message: 'Internal Server Error'
                            });
                        }
                        req.login (user, function (err) {
                            if (err) {
                                return res.status(500).json ({
                                    message: 'Internal Server Error'
                                });
                            }
                            console.log(user);
                            return res.status(201).json (user);
                        });
                        
                        });
                    });
                });
            }
        });
    });
};