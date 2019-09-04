// this is the Director for the enterpise account 

// import mongoose
var mongoose = require('mongoose');
const AdminModel = require('./adminModel');


const Director = AdminModel.discriminator('Director', new mongoose.Schema({

/* email: {
    type: String, required: true, trim: true
  },

  password: {
    // trim: true accep
    type: String, required: true, trim: true
  }, */

  cin: {
    type: Number, required: true, trim: true
  },

}),
);
module.exports = mongoose.model('Director');
