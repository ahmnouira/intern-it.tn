const DirectorModel = require('../models/directorModel');
const OfferModel = require('../models/offerModel');

module.exports = {

post : function(req, res) {
    // console.log(req.body)
    const director = new DirectorModel({
      email: req.body.email,
      password: req.body.password,
      secret_id: req.body.secret_id,
      //offers: req.body.offers,
      //candidate : req.body.candidate,
      about_me: req.body.about_me,
      //image: req.body.image,
      //company = req.body.company

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
      // GET one director
      if (req.params.id) {
      // DirectorModel.findOne({_id:req.params.id}).populate({path : 'offers', populate: {path : 'candidate', model:'candidate'}}).exec(function(err, director){
        DirectorModel.findOne({_id: req.params.id}, function(err, director){
        if (err){
        res.json({status: "error", msg: "vous avez un erreur"  + err })
        }
        else {
        OfferModel.find({createdByDirector: director._id}, function(err, offers){
        if(err) {throw err;}
        console.log(offers);
        res.json({'director': {'info' : director, 'offers': offers}});
      })

      }
      })
}
    else {
      DirectorModel.find({}, function(err, directors){
      // console.log(directors);
        if (err){
        res.json({status: "error", msg: "vous avez un erreur"  + err })
        } else {
        res.json(directors);
      }
      })
    }
  },

delete: function(req, res){
      if (req.params.id) {
      DirectorModel.deleteOne({_id:req.params.id},function(err){
        if(!err){
          res.json({status:"ok", msg: "Director Deleated ! "})
        } else {
          res.json({status:"error", msg:"error"})
        }

      });
    } else {
      DirectorModel.deleteMany({}, function(err){
        if(err) {
          res.json({status: "error", msg: err });

        } else {
          res.json({status: "OK", msg: "All Directors has been Deleted Successfully"})
        }
      });
    }
  },

put: function(req, res) {

      DirectorModel.findOne({_id: req.params.id}, function(err, user_to_updated){
      if(err){ throw err;}
        else {
          DirectorModel.updateOne({_id: req.params.id},
            {
              secret_id: req.body.secret_id ? req.body.secret_id : user_to_updated.secret_id,
              email: req.body.email ? req.body.email : user_to_updated.email
            },
              function(err) {
            if (err) {
            res.json({status: "ERROR", msg: "vous avez un erreur: "  + err })
          } else {
            res.json({status: "OK", msg: "Director Upadted"})
          }
        });

}

});

},

addOffer: function(req, res) {
  DirectorModel.findByIdAndUpdate(req.params.id,
    {$push: {offers: req.body.offers}},
    {safe: true, upsert: true, },
    function(err, doc) {
        if(err){
        console.log(err);
        }else{
          res.json({status: "OK", msg: "Director Upadted"})
        }
    }
);
},

token: function(req, res) {
  if(req.params.id) {
    DirectorModel.findOne({_id: req.params.id}, function(err, director){
      if(err) {throw err; }
      else {
        token = director.getToken();
        c_token = director.checkToken(token);
        res.json({user_email: director.email, token: {token_generated: token, user_id:c_token.user_id }})
        }
      });
    }
  }
}
