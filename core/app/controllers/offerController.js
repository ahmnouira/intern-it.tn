const OfferModel = require('../models/offerModel');


module.exports = {

post : function(req, res) {
    // console.log(req.body)
    const offer = new OfferModel({
      title: req.body.title,
      description: req.body.description,
      type: req.body.type,
      candidates: req.body.candidate,
      createdByDirector: req.body.directorId,
      place: req.body.place,
      company : req.body.company
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
        OfferModel.findOne({_id:req.params.id}).sort('-created_at').populate('createdByDirector', '_id email secret_id nb_offers').populate('candidates', '_id first_name last_name email tel').exec(function(err, offer){
        if (err){
        res.json({status: "error", msg: "vous avez un erreur"  + err })
        } else {
        res.json(offer);
      }
    })

    } else {
      OfferModel.find({}).sort('-created_at').populate('createdByDirector').populate('candidates').exec(function(err, offers){
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

  put : function(req, res) {

    OfferModel.findOne({_id:req.params.id}, function(err, offer){
      if (err) {throw err;}
      else {
      OfferModel.updateOne({_id:req.params.id},
        {
          title: req.body.title ? req.body.title : offer.title,
          description: req.body.description ? req.body.description : offer.description,
          type:req.body.type ? req.body.type: offer.type,
          place:req.body.place ? req.body.place: offer.place
        }
        , function(err) {
            if (err) {
            res.json({status: "error", msg: "vous avez un erreur: "  + err })
          } else {
            res.json({status: "OK", msg:"Offer Has been Updated Successfully"});
          }
    });
    }
  });
  
  },




/*
addCandidate: function(req, res) {
    OfferModel.findByIdAndUpdate(req.params.id,
      {$push: {candidate: req.body.candidate}},
      {upsert: true },
      function(err, doc) {
          if(err){
          console.log(err);
          }else{
            res.json({status: "OK", msg: "Candiate Upadted"})
          }
      }
  );
  } */

}
