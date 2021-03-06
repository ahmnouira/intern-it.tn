// import mongoose
var mongoose = require('mongoose');
//var moment = require('moment');

const offerSchema = mongoose.model('offer', new mongoose.Schema({


  createdByDirector: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Director'
  },

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

  created_at: {
      type:Date, 'default': Date.now 
  },

  views: {
    type: Number, 'default': 0
  },

  likes: {
    type: Number, 'default': 0
  },

  place: {
    type: String
  },

  nb_candidate_insc: {
    type: Number, 'default': 0
  },

  candidates: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'candidate'
  }], 
  
  company : {
    type: String
  }

}))

module.exports = mongoose.model('offer');
