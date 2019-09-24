// import mongoose
var mongoose = require('mongoose');
const UsersModel = require('./usersModel');

const Etudiant = UsersModel.discriminator('candidate', new mongoose.Schema({

  first_name: {
    type: String, required: true, trim: true
  },

  last_name: {
    type: String, required: true, trim: true
  },

  tel: {
    type: Number
  },

  address: {
    type: String
  },

  aboute_me: {
    type: String
  },

  offers : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'offer'
  }]

}))

module.exports =  mongoose.model('candidate');
