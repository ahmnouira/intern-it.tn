// this is the Director for the enterpise account

// import mongoose
var mongoose = require('mongoose');
const UsersModel = require('./usersModel');

const Director = UsersModel.discriminator('Director', new mongoose.Schema({

  secret_id: {
    type: String , required: true
  },

  nb_offers: {
  type:Number, 'default': 0
},

  offers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'offer',
    candidate: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'candidate'
    }]
  }],

  files: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'file'
  }]


}),
);
module.exports = mongoose.model('Director');
