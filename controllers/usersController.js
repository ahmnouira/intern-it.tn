const usersModel = require('../models/usersModel');
const jwt = require('jsonwebtoken');
const moment = require('moment')

var newUser = new usersModel({
  email: "fdfdfdf",
  password: "pass1"
});


module.exports = {

get: function(req, res) {

      if (req.params.id) {
      usersModel.findOne({_id:req.params.id} , function(err, user){
        if (err){
        res.json({status: "error", msg: "vous avez un erreur"  + err })
        } else {
        res.json(user);
      }
      })

    } else {
      usersModel.find({}, function(err, users){
        //console.log(users);
        if (err){
        res.json({status: "error", msg: "vous avez un erreur"  + err })
        } else {
        res.json(users);
      }
      })
    }
  },

delete: function(req, res){
      if (req.params.id) {
      usersModel.deleteOne({_id:req.params.id},function(err){
        if(!err){
          res.json({status:"ok", msg: " User Deleted ! "})
        } else {
          res.json({status:"error", msg:"error"})
        }
      });
    } else {
      usersModel.deleteMany({}, function(err){
        if(err) {
          res.json({status: "error", msg: err })
        }else {
          res.json({status:"OK", msg: "All Users has been Deleted Successfully"})
        }

      })
    }
},

token: function(req, res) {
  if(req.params.id) {
    usersModel.findOne({_id: req.params.id}, function(err, user){
      if(err) {throw err; }
      else {
      token = user.getToken();
      c_token = user.checkToken(token);
      res.json({user_email: user.email, token: {token_generated: token, user_id:c_token.user_id }})
        }
      });
    }
  }
}

/*
verifyToken: function(req, res) {
  if(req.body) {
    users.usersModel.findOne({_id: req.params.id}, function(err, user) {
      if(err) { throw err; }
      else {
        jwt.verify()
      }
    }
      }
}

*/
