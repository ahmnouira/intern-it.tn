const OfferModel = require('../models/offerModel');


module.exports = {

post : function(req, res) {
    // console.log(req.body)
    const offer = new OfferModel({
      title: req.body.title,
      description: req.body.description,
      type: req.body.type
    })

    offer.save(function(err) {
      if (err) {
      res.json({status: "error", msg: "vous avez un erreur: "  + err })
    } else {
      res.json({status: "OK", mgs: "Offer Added: <" + req.body.title + ">"})
    }
  });
},

get: function(req, res) {
      if (req.params.id) {
      OfferModel.find({_id:req.params.id} , function(err, offer){
        if (err){
        res.json({status: "error", msg: "vous avez un erreur"  + err })
        } else {
        res.json(offer);
      }
      })
    } else {
      OfferModel.find({}, function(err, offers){
        console.log(offers);
        if (err){
        res.json({status: "error", msg: "vous avez un erreur"  + err })
        } else {
        res.json(offers);
      }
      })
    }
  },

delete: function(req, res){
      OfferModel.deleteOne({_id:req.params.id},function(err){
        if(!err){
          res.json({status:"ok", msg: "Offer Deleated ! "})
        } else {
          res.json({status:"error", msg:"error"})
        }

      });
    }
}
