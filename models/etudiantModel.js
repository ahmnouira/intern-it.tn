// import mongoose
var mongoose = require('mongoose');
const AdminModel = require('./adminModel');

const Etudiant = AdminModel.discriminator('Etudiant', new mongoose.Schema({

  nom: {
    type: String, required: true, trim: true
  },

  prenom: {
    type: String, required: true, trim: true
  },

  tel: {
    type: Number
  }

  

}))

module.exports =  mongoose.model('Etudiant');
