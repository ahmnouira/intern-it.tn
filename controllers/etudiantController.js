const EtudiantModel = require('../models/etudiantModel');

module.exports = {

post : function(req, res) {
    // console.log(req.body)
    const etudiant = new EtudiantModel({
      email: req.body.email,
      password: req.body.password,
      nom: req.body.nom,
      tel: req.body.tel,
    })

    etudiant.save(function(err) {
      if (err) {
      res.json({status: "error", msg: "vous avez un erreur: "  + err })
    } else {
      res.json({status: "OK", mgs: "Etudiant Added: <" + req.body.nom + ">"})
    }
  });
},

get: function(req, res) {
      if (req.params.id) {
      EtudiantModel.find({_id:req.params.id} , function(err, etudiant){
        if (err){
        res.json({status: "error", msg: "vous avez un erreur"  + err })
        } else {
        res.json(etudiant);
      }
      })
    } else {
      EtudiantModel.find({}, function(err, etudiants){
        console.log(etudiants);
        if (err){
        res.json({status: "error", msg: "vous avez un erreur"  + err })
        } else {
        res.json(etudiants);
      }
      })
    }
  },

delete: function(req, res){
      DirectorModel.deleteOne({_id:req.params.id},function(err){
        if(!err){
          res.json({status:"ok", msg: "Etudiant Deleated ! "})
        } else {
          res.json({status:"error", msg:"error"})
        }

      });
    }
}
