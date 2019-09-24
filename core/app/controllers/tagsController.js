const TagModel = require('../models/TagModel');

module.exports = {

create : function(req, res) {
    console.log(req.body)
    const tag = new TagModel({
      nom : req.body.nom
    })

    tag.save(function(err) {
      if (err) {
      res.json({status: "error", msg: "vous avez un erreur"  + err })
    } else {
      res.json({status: "OK", mgs: " Tag Added: " + req.body.nom})
    }
  });
},

get: function(req, res) {

      if (req.params.id) {
      TagModel.find({_id:req.params.id} , function(err, tag){
        if (err){
        res.json({status: "error", msg: "vous avez un erreur"  + err })
        } else {
        res.json(tag);
      }
      })

    } else {
      TagModel.find({}, function(err, tags){
        console.log(tags);
        if (err){
        res.json({status: "error", msg: "vous avez un erreur"  + err })
        } else {
        res.json(tags);
      }
      })
    }
  },

delete: function(req, res){

      TagModel.deleteOne({_id:req.params.id},function(err){
        if(!err){
          res.json({status:"ok", msg: "tag deleated"})
        } else {
          res.json({status:"error", msg:"error"})
        }

      });
    }

}
