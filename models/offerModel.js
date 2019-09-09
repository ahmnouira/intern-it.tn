// import mongoose
var mongoose = require('mongoose');
var moment = require('moment');

const offerSchema = mongoose.model('offer', new mongoose.Schema({

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
      type:String, 'default': moment().format('MMMM Do YYYY, h:mm:ss a')
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

  candidate: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'candidate'
  }]

}))

module.exports = mongoose.model('offer');
