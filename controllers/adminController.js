const AdminModel = require('../models/adminModel');

module.exports = {

post : function(req, res) {
    // console.log(req.body)
    const admin = new AdminModel({
      email : req.body.email,
      password : req.body.password
    })

    admin.save(function(err) {
      if (err) {
      res.json({status: "error", msg: "vous avez un erreur: "  + err })
    } else {
      res.json({status: "OK", mgs: "Admin Added: {" + req.body.email + "}"})
    }
  });
},

get: function(req, res) {

      if (req.params.id) {
      AdminModel.find({_id:req.params.id} , function(err, admin){
        if (err){
        res.json({status: "error", msg: "vous avez un erreur"  + err })
        } else {
        res.json(admin);
      }
      })

    } else {
      AdminModel.find({}, function(err, admins){
        console.log(admins);
        if (err){
        res.json({status: "error", msg: "vous avez un erreur"  + err })
        } else {
        res.json(admins);
      }
      })
    }
  },

delete: function(req, res){

      AdminModel.deleteOne({_id:req.params.id},function(err){
        if(!err){
          res.json({status:"ok", msg: " Admin Deleated ! "})
        } else {
          res.json({status:"error", msg:"error"})
        }

      });
    }
}
