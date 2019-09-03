// import mongoose
var mongoose = require('mongoose');

const EtudiantSchema = mongoose.model('Etudiant', new mongoose.Schema({

  nom: {
    type: String, required: true, trim: true
  },

  email: {
    // trim: true accep
    type: String, required: true
  },

  tel: {
    type: Number 
  }

}))
module.exports = EtudiantSchema ;
