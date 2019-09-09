const OfferModel = require('../models/offerModel');


module.exports = {

post : function(req, res) {
    // console.log(req.body)
    const offer = new OfferModel({
      title: req.body.title,
      description: req.body.description,
      type: req.body.type,
      candidate: req.body.candidate
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
        OfferModel.findOne({_id:req.params.id}).populate('candidate').exec(function(err, offer){
        if (err){
        res.json({status: "error", msg: "vous avez un erreur"  + err })
        } else {
        res.json(offer);
      }
    })

    } else {
      OfferModel.find({}, function(err, offers){
        //console.log(offers);
        if (err){
        res.json({status: "error", msg: "vous avez un erreur"  + err })
        } else {
        res.json(offers);
      }
      })
    }
  },

delete: function(req, res){
      if (req.params.id) {
      OfferModel.deleteOne({_id:req.params.id},function(err){
        if(!err){
          res.json({status:"ok", msg: "Offer Deleated ! "})
        } else {
          res.json({status:"error", msg:"error"})
        }

      });
    } else {
      OfferModel.deleteMany({}, function(err) {
        if(err) {
          res.json({status: "error", msg: err})
        } else {
          res.json({status: "OK",  msg:"All Offers has been Deleated Successfully" })
        }
      });
    }
  },

addCandidate: function(req, res) {
    OfferModel.findByIdAndUpdate(req.params.id,
      {$push: {candidate: req.body.candidate}},
      {upsert: true },
      function(err, doc) {
          if(err){
          console.log(err);
          }else{
            res.json({status: "OK", msg: "Director Upadted"})
          }
      }
  );
  }

}
