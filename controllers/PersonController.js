const PersonModel = require('../models/personModel');

module.exports = {

  create : function(req, res) {
    console.log(req.body)
    const person = new PersonModel({
      nom : req.body.nom,
      cin : req.body.cin

    })

    person.save(function(err) {
      if (err) {
      res.json({status: "error", msg: "vous avez un erreur"  + err })
    } else {
      res.json({status: "OK", mgs: "personelle added: " + req.body.nom})
    }
  });
},

get: function(req, res) {

      if (req.params.id) {
      PersonModel.find({_id:req.params.id} , function(err, person){
        if (err){
        res.json({status: "error", msg: "vous avez un erreur"  + err })
        } else {
        res.json(person);
      }
      })
    } else {
      PersonModel.find({}, function(err, persons){
        if (err){
        res.json({status: "error", msg: "vous avez un erreur"  + err })
        } else {
        res.json(persons);
      }
      })
    }
  },

delete: function(req, res){
  if (req.parmas.id) {
    PersonModel.findOne({_id:req.parmas.id}, function(err, person) {
      if (err) {
      res.json({status: "error", msg: "vous avez un erreur"  + err })
      } else {
      PersonModel.deleteOne(function(err){
        if(!err){
          res.json({status:"ok", msg: "user deleated"})
        } else {
          res.json({status:"error", msg:"error"})
        }

      });
    }
    });
  }
}

}
