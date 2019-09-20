const UserModel = require('../models/userModel');
const OfferModel = require('../models/offerModel');

module.exports = {

// POST method
post : function(req, res) {
    // console.log(req.body)
    const user = new UserModel({
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      tel: req.body.tel,
      last_name: req.body.last_name,
      address: req.body.address,
      offers: req.body.offer
    })

    user.save(function(err) {
      if (err) {
      res.json({status: "ERROR", msg: "vous avez un erreur: "  + err })
    } else {
      res.json({status: "OK", mgs: "Student/User Added: < " + req.body.first_name + " " + req.body.last_name + " >"})
    }
  });
},

// GET method,
get: function(req, res) {
      if (req.params.id) {
      UserModel.findOne({_id:req.params.id}).populate('offers', '_id title description type').exec(function(err, user){
        if (err){
        res.json({status: "ERROR", msg: "vous avez un erreur"  + err })
        } else {
        res.json(user);
      }
      })
    } else {
      UserModel.find({}, function(err, users){
        //console.log(users);
        if (err){
        res.json({status: "ERROR", msg: "vous avez un erreur"  + err })
        } else {
        res.json(users);
      }
      })
    }
  },

// DELETE method
delete: function(req, res){
      if(req.params.id) {
      UserModel.deleteOne({_id:req.params.id},function(err){
        if(!err){
          res.json({status:"ok", msg: "Students Deleated ! "})
        } else {
          res.json({status:"error", msg:err})
        }
      });
    } else {
      UserModel.deleteMany({}, function(err){
        if(err) {
          res.json({status: "error", msg:err});
        } else {
          res.json({status: "OK", msg:"All Students/User Has been Deleated Successfully"});
        }
      });
    }
},
put : function(req, res) {

  UserModel.findOne({_id:req.params.id}, function(err, user){
    if (err) {throw err;}
    else {
    UserModel.updateOne({_id:req.params.id},
      {
        email: req.body.email ? req.body.email : user.email,
        first_name: req.body.first_name ? req.body.first_name : user.first_name,
        last_name:req.body.last_name ? req.body.last_name : user.last_name,
        tel:req.body.tel ? req.body.tel: user.tel
      }
      , function(err) {
          if (err) {
          res.json({status: "error", msg: "vous avez un erreur: "  + err })
        } else {
          res.json({status: "OK", msg:"User Has been Updated Successfully"});
        }
  });
  }
});

},

token: function(req, res) {
  if(req.params.id) {
    UserModel.findOne({_id: req.params.id}, function(err, user){
      if(err) {throw err; }
      else {
      token = user.getToken();
      c_token = user.checkToken(token);
      res.json({user_email: user.email, token: {token_generated: token, user_id:c_token.user_id }})
        }
      });
    }
  }

/*login : function(req, res) {
  if (!req.body.email || !req.body.password) {
    res.status(400).send("Error. Please enter the correct username and password");
    return;
  }
      EtudiantModel.findOne({email: req.body.eamil, password, function(err, image){
});*/


}
