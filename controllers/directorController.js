const DirectorModel = require('../models/directorModel');

module.exports = {

post : function(req, res) {
    // console.log(req.body)
    const director = new DirectorModel({
      email : req.body.email,
      password : req.body.password,
      cin: req.body.cin
    })

    director.save(function(err) {
      if (err) {
      res.json({status: "error", msg: "vous avez un erreur: "  + err })
    } else {
      res.json({status: "OK", mgs: "Director Added: <" + req.body.email + ">"})
    }
  });
},

get: function(req, res) {
      if (req.params.id) {
      DirectorModel.find({_id:req.params.id} , function(err, director){
        if (err){
        res.json({status: "error", msg: "vous avez un erreur"  + err })
        } else {
        res.json(director);
      }
      })

    } else {
      DirectorModel.find({}, function(err, directors){
        console.log(directors);
        if (errss){
        res.json({status: "error", msg: "vous avez un erreur"  + err })
        } else {
        res.json(directors);
      }
      })
    }
  },

delete: function(req, res){
      DirectorModel.deleteOne({_id:req.params.id},function(err){
        if(!err){
          res.json({status:"ok", msg: "Director Deleated ! "})
        } else {
          res.json({status:"error", msg:"error"})
        }

      });
    }
}
