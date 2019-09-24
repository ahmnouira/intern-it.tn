// import mongoose
var mongoose = require('mongoose');

const TagsSchema = mongoose.model('Tag', new mongoose.Schema({

name: {
  type: String
},

nbOffers: {
  type: Number
}

}))
module.exports = TagsSchema ;
