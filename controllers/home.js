const path = require('path');
const Users = require('../models/usersModel');
var homeFile = path.join(__dirname, '../views/home.html' );
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
console.log(homeFile);

module.exports = {

  index: function(req, res) {
    res.sendFile(homeFile);
  },

  login: function(req, res) {
    email = req.body.email;
    password = req.body.password;
    if(email && password) {
    Users.findOne({email: {$regex: email}}, function(err, user){
      if(err){console.log(err); res.json({error: err })}
      else {
        if(user === null || ! user.checkPassword(password)){
          console.log("email or password")
          res.json({status: "ERROE", msg: "Invalid email or password"})
        } else {
          console.log(user);
          const token = user.getToken(req.app.get('SECRET_KEY'))
          switch (user.type) {
            case 'Director':  res.json({status: "OK", user: { account:user.type, email: user.email, secret_id: user.secret_id, memeber_since: user.created_at, token: token}}); break;
            case 'candidate': res.json({status: "OK", user: { account:user.type, email: user.email, full_name: user.first_name + " " + user.last_name, memeber_since: user.created_at, token: token}}); break;
            default: res.json({status: "OK", admin: "**** ADMINS****"})
          }
        }
          }
      });
    } else {
        res.json({status: "error", msg: "NO email or password Entered !!!"});
      }
},

    auth : function(req, res) {
      Users.findOne({email: req.body.email} , function(err, user) {
      if(err) { next(err); }

      else {

        if(user != null) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
          const token = jwt.sign({id: user._id}, req.app.get('SECRET_KEY'), {expiresIn: '1h'});
          res.json({status: 'OK', yout_token: token})
        } else {
          res.json({status: "ERROR", msg: "Please verify your password"})
        }
      } else {
        res.json({status: "ERROE", msg: "Invalid email or password"})

  }
  }
});
}

}
