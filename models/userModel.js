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

  user_offers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'offers'
  }],

  files: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'file'
  }]

}))

module.exports =  mongoose.model('candidate');
