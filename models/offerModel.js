// import mongoose
var mongoose = require('mongoose');


const offerSchema = mongoose.model('Offer', new mongoose.Schema({

  title: {
    // trim: true accep
    type: String, required: true, trim: true
  },

  description : {
    // trim: true accep
    type: String, required: true, trim: true
  },

  type: {
    type: String, required: true, trim: true
  },

}))

module.exports = offerSchema;
