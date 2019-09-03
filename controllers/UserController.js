const UserModel = require('../models/userModels');

module.exports = {

  //create user
  create : function(req, res) {
    console.log(req.body)
    const user = new UserModel ({

      nom : req.body.nom,
      prenom : req.body.prenom,
      email : req.body.email,
      password : req.body.password
    })

    user.save(function(err){
      if (err) {
      res.json({status: "error", msg: "vous avez un erreur"  + err })
    } else {
      res.json({status: "OK", mgs: "user added"})
    }
  });
},

// get user
get: function(req, res) {
  // for specific user
  if(req.params.id) {
    UserModel.find({_id: req.params.id}, function(err, users) {
      if (err){
      res.json({status: "error", msg: "vous avez un erreur"  + err })
      } else {
      res.json(users);
    }
    });
  } else {
    // all users
    UserModel.find({}, function(err, user){
    if (err){
      res.json({status: "error", msg: "vous avez un erreur"  + err })
      } else {
      res.json(user);
    }
    });
  }
}



}
